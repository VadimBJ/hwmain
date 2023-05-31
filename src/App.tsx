import React from 'react';
import './App.css';
import Sandwich from './Components/sandwich';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Создай свой уникальный бутерброд</h1>
      <Sandwich />
    </div>
  );
}

export default App;
