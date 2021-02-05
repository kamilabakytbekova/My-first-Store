import React from 'react'
import './App.css';
import Header from './components/header/header'
import Card from './components/card/card'

function App() {
  return (
    <div>
      <Header/>
      <div className={'wrapper'}>
      <Card />
      </div>
      </div>
     
  );
}

export default App;
