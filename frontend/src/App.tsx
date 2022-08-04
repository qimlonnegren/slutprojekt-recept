import React from 'react';
import './App.css';
import Title from './components/Title';
import SideMenu from './components/SideMenu';
import styling from './styling.module.css'
import Recipes from './components/Recipes'
import SingleRecipe from './components/SingleRecipe'


const App = () => (

  <div className="App">
    <Title />
    <SideMenu />
    <div className={styling.smallRecipeContainer}>
      <SingleRecipe />
      <Recipes />
      <Recipes />
      <Recipes />
    </div>
  </div>

)

export default App;
