import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ displayItems, setDisplayItems }) {

  function removeItem(item) {
    console.log(displayItems)
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setDisplayItems(displayItems.filter(newItem => newItem.id !== item.id))

  }

  return (
    <main>
      <ul className="cards">
        {displayItems.map(item => {
          return (
            <ListingCard displayItem={item} key={item.id} removeItem={removeItem} />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
