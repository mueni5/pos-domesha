import React, { useState, useEffect } from "react";
import "./Payment.css";
import { TransactionRequest } from "./Transaction";

export default function PaymentForm(props) {
  const [cashierId, setcashierId] = useState(12); 
  const [given, setGiven] = useState(75);
  const [change, setChange] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // In a real-world scenario, fetch staff id from the server
    // For demonstration purposes, using a dummy value
    setcashierId(12);
  }, []);

  const onClickSubmit = () => {
    setIsSubmitting(true);

    const transaction = new TransactionRequest();
    transaction.cashier_id = cashierId;
    transaction.paid = given;
    transaction.total = calculateTotal(); // Calculate the total bill
    transaction.change = calculateChange(transaction.paid, transaction.total);
    transaction.payment_type = "Visa"; 
    transaction.comment = "Recieved"; 

    
    simulateApiCall(transaction)
      .then(() => {
        // Assuming you get a response from the server
        console.log("Transaction successful!");
        setChange(transaction.change);
        setIsSubmitting(false);
      })
      .catch((err) => {
        // Show error message to the user
        console.error("Error submitting transaction:", err);
        setIsSubmitting(false);
      });
  };

  const calculateTotal = () => {
    return 75;
  };

  const calculateChange = (amountGiven, totalAmount) => {
    // Simulating the calculation of change
    return amountGiven - totalAmount;
  };

  const simulateApiCall = (transaction) => {
    // Simulating an API call with a delay using Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve();
      }, 2000);
    });
  };

  return (
    <div>
      <div>
        <strong>Cashier ID:</strong> {cashierId}
      </div>
      <div>
        <strong>Total Bill:</strong> ${calculateTotal()}
      </div>
      <div>
        <strong>Amount Given:</strong> ${given}
      </div>
      <div>
        <strong>Payment Method:</strong> Visa card
      </div>
      <div>
        <strong>Comments:</strong> Payment received 
      </div>
      {isSubmitting && <div>Submitting...</div>}
      {change !== null && (
        <div>
          <strong>Change:</strong> ${change}
        </div>
      )}
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
