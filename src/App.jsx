import React, { Component } from 'react';
import Experience from './components/Experience';
import './App.css';

function App() {

  const experiences = [
    {
      year: "2017-2020",
      company: "Wild Code School",
      job: "Formateur Java et JavaScript"
    },
    {
      year: "2011-2017",
      company: "Planet Cards",
      job: "Réalisation d'un application de création de livre photos"
    }
  ];

  return (<div className="App">
    {
      experiences.map((experience) => <Experience {...experience} />)
    }
  </div>);
}

export default App;
