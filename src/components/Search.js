import React from "react";

function Search({ searchTerm, setSearchTerm, displayItems, setDisplayItems, getData }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchTerm)
    if (searchTerm) {
      const newDisplay = displayItems.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      setDisplayItems(newDisplay)
      setSearchTerm("")
    } else {
      getData();
    }
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
