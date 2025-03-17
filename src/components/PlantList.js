import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ setPlants, plantsToDisplay, setPlantsToDisplay }) {
 
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => {
        setPlants(data)
        setPlantsToDisplay(data)
      })
  }, [])

  return (
    <ul className="cards">{plantsToDisplay.map(plant => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />)}</ul>
  );
}

export default PlantList;
