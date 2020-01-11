import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

function App() {
  var courses=[
    {name:'Web Development using Python-Django',price:'699'},
    {name:'Full Stack Development using MEAN',price:'1699'},
    {name:'Mastering ReactJS',price:'599'},
    {name:'Complete NodeJS ',price:'499'}

  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to Course App Module
        </p>
      </header>
      <Coursesales  items={courses} />
    </div>
  );
}

export default App;
