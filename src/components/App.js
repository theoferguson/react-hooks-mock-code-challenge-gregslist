import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [displayItems, setDisplayItems] = useState([])

  function getData() {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(json => {
      setDisplayItems(json)
    });
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="app">
      <Header displayItems={displayItems} setDisplayItems={setDisplayItems} searchTerm={searchTerm} setSearchTerm={setSearchTerm} getData={getData} />
      <ListingsContainer displayItems={displayItems} setDisplayItems={setDisplayItems} />
    </div>
  );
}

export default App;
