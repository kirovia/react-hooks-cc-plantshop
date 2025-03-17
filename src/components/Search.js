import React from "react";

function Search({ plants, setPlantsToDisplay }) {

  const handleSearch = e => {
    const newPlants = plants.filter(plant => plant.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setPlantsToDisplay(newPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
