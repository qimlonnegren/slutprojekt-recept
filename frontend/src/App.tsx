import React from 'react';
import './App.css';
import Title from './components/Title';
import SideMenu from './components/SideMenu';
import styling from './styling.module.css'
import Recipes from './components/Recipes'

const App = () => (

  <div className="App">
    <Title />
    <SideMenu />
    <div className={styling.smallRecipeContainer}>
      <Recipes />
    </div>
  </div>

)

export default App;
