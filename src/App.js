import "./App.css";

import React, { useEffect, useState } from "react";
import Router from "../src/routes/index";
import {collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

import Footer from "./Components/Footer/Footer";

import plantShape from "../src/Static/PlantasInitialPage/VectorPlant.png";

const fetchStorePlantsFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "vendas"));
  const temporaryArr = [];
  querySnapshot.forEach((doc) => {
    temporaryArr.push(doc.data());
  });
  return temporaryArr
};

const fetchWikiPlantsFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "catalogacao"));
  const temporaryArr = [];
  querySnapshot.forEach((doc) => {
    temporaryArr.push(doc.data());
  });
  return temporaryArr
};

function App() {
  const [storePlants, setStorePlants] = useState([]);
  const [wikiPlants, setWikiPlants] = useState([])

  useEffect(() => {
    fetchStorePlantsFromFirestore().then((data) => setStorePlants(data))
  }, [])

  useEffect(() => {
    fetchWikiPlantsFromFirestore().then((data) => setWikiPlants(data))
  }, [])

  return (
    <div className="App" style={{ zIndex: 1 }}>
      <img id="plantShape" src={plantShape} alt="uma folha" />
      <Router plants={storePlants} wikiPlants={wikiPlants} />
      {<Footer />}
    </div>
  );
}

export default App;
