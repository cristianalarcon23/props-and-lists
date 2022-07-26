import './App.css';
import React, {useState} from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData);

  const handleSortByLife = () => {
    const ordered = [...animals].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy);
    setAnimals(ordered);
  }

  const showDogs = () => {
    const dogs = animals.filter(elem => elem.type === 'dog');
    setAnimals(dogs);
  }

  const originalArr = () => {
    setAnimals(animalData)
  }

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button className='action-btn' onClick={handleSortByLife}>Sort by Life</button>
      <button className='action-btn' onClick={showDogs}>Show only firulais</button>
      <button className='action-btn' onClick={originalArr}>Clear filters</button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}

export default App;
