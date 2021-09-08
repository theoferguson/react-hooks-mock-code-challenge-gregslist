import React, {useState} from "react";

function ListingCard({displayItem, removeItem}) {
  const [favButton, setFavButton] = useState(false)

  function handleFavorite() {
    setFavButton(!favButton)
  }

  function handleRemove() {
    removeItem(displayItem)
  }  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={displayItem.image} alt={"description"} />
      </div>
      <div className="details">
        {favButton ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{displayItem.description}</strong>
        <span> · {displayItem.location}</span>
        <button onClick={handleRemove} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
