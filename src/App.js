import './App.css';

import InitialPage from './Components/InicialPage/InitialPage';
import Catalogo from './Components/Catalogo/Catalogo';
import ExpandedItem from './Components/ExpandedItem/ExpandedItem';

import plantShape from '../src/Static/PlantasInitialPage/VectorPlant.png'
import { useState } from 'react';

const DUMMY_PLANTS = [
  {
    id: "p1",
    name: "Jiboia",
    price: 33.99,
    store: "Vet Fauna Pet Shop",
  },
  {
    id: "p2",
    name: "Orquídea",
    price: 100.99,
    store: "Plutu's Pet Shop",
  },
  {
    id: "p3",
    name: "Lírio da paz",
    price: 16.99,
    store: "Girassol Pet Shop",
  },
  {
    id: "p4",
    name: "Samambaia",
    price: 50.0,
    store: "Mil Bichos Pet Shop",
  },
];

function App() {

  const [plants, setPlants] = useState(DUMMY_PLANTS)
  
  return (
    <div className="App" style={{zIndex: 1}}>
      <img id='plantShape' src={plantShape} alt='uma folha' style={{zIndex: 2}}/>
      {/*<Catalogo plants={plants}/>*/}
      <ExpandedItem item={plants}/>
    </div>
  );
}

export default App;
