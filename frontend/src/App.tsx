import React from 'react';
import './App.css';
import BowlingDataList from './Bowling/Bowling';

function Heading(props: any) {
  return (
    <header className="bg-dark navbar row header">
      <div className="text-white">
        <h1>{props.title}</h1>
        <h2>
          This app gives bowler info for those playing on the Marlins or the
          Sharks
        </h2>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Heading title="Bowlers on the Marlins and Sharks!" />
      <BowlingDataList />
    </div>
  );
}

export default App;
