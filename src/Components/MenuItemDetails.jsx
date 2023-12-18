import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from './Menu';

function MenuItemDetails({ addToOrder }) {

  const [menuItem, setMenuItem] = useState(null);
  const [loading, setLoading] = useState(false);  
  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      const response = await fetch('/api/menu/' + id);
      const data = await response.json();

      setMenuItem(data);

      setLoading(false);
    }

    fetchData();

  }, [id]);

  if(loading) {
    return <p>Loading...</p> 
  }

  return (
    <div key={menuItem.id}>
      <h2>{menuItem.name}</h2>
      <button onClick={() => addToOrder(menuItem)}>
        Add to order  
      </button>
    </div>
  );
}

export default MenuItemDetails;