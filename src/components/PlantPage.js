import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [plantsToDisplay, setPlantsToDisplay] = useState([])

  return (
    <main>
      <NewPlantForm plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay} />
      <Search plants={plants} setPlantsToDisplay={setPlantsToDisplay} />
      <PlantList setPlants={setPlants} plantsToDisplay={plantsToDisplay} setPlantsToDisplay={setPlantsToDisplay} />
    </main>
  );
}

export default PlantPage;
