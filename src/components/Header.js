import React from "react";
import Search from "./Search";

function Header({searchTerm, setSearchTerm, displayItems, setDisplayItems, getData}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayItems={displayItems} setDisplayItems={setDisplayItems} getData={getData} />
    </header>
  );
}

export default Header;
