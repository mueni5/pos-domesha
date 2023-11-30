import React, { useState, useEffect } from "react";
import "./Payment.css";


export default function PaymentForm(props) {
  const [staffId, setStaffId] = useState(123); // Replace with actual logic to get staff id
  const [given, setGiven] = useState(50);
  const [change, setChange] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // In a real-world scenario, you might fetch staff id from the server
    // For demonstration purposes, using a dummy value
    setStaffId(123);
  }, []);

  const onClickSubmit = () => {
    setIsSubmitting(true);

    const transaction = {
      staffId: staffId,
      amountGiven: given,
      // Other transaction details as needed
    };

    // Simulating API call with a delay
    simulateApiCall(transaction)
      .then(() => {
        // Assuming you get a response from the server
        console.log("Transaction successful!");
        setChange(calculateChange(transaction.amountGiven));
        setIsSubmitting(false);
      })
      .catch((err) => {
        // Show error message to the user
        console.error("Error submitting transaction:", err);
        setIsSubmitting(false);
      });
  };

  const calculateChange = (amountGiven) => {
    // Simulating the calculation of change
    const totalAmount = 75; // Replace with the actual total amount
    return amountGiven - totalAmount;
  };

  const simulateApiCall = (transaction) => {
    // Simulating an API call with a delay using Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        // Resolve after 2 seconds (simulating the API call)
        resolve();
      }, 2000);
    });
  };

  return (
    <div>
      <div>
        <strong>Staff ID:</strong> {staffId}
      </div>
      <div>
        <strong>Amount Given:</strong> ${given}
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
