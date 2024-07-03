import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import React, { useState } from 'react';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2024, 2, 21),
    description: 'Компьютер',
    amount: 2340.99,
  },
  {
    id: 'c2',
    date: new Date(2024, 5, 1),
    description: 'Телефон',
    amount: 340.0,
  },
  {
    id: 'c3',
    date: new Date(2019, 4, 17),
    description: 'Билет',
    amount: 40.5,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => [cost, ...prevCosts]);
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
