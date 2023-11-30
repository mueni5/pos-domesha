import React from 'react';

function MenuItem({ title, price, tags, image }) {
  return (
    <div className="menu-item">
      <div className="menu-item__header">
        <div className="menu-item__details">
          <img 
            className="menu-item__image"
            src={image}
            alt={title}  
          />
          <h3 className="menu-item__title">{title}</h3>
        </div>

        <div className="menu-item__dash"></div>

        <div className="menu-item__price">
          <p>{price}</p>
        </div>

        <div className="menu-item__tags">
          <p className="menu-item__tag">{tags}</p> 
        </div>
      </div>
    </div>
  );
}

export default MenuItem;