import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import SideMenu from './components/SideMenu';
import SmallRecipeComponentCss from './components/SmallRecipeComponentCss';
import styling from './styling.module.css'
// import genericCssStyling from './modulesCss/genericCssStyling';

const App = () => (

  <div className="App">
    <Title />
    <SideMenu />
    <div className={styling.smallRecipeContainer}>
      <SmallRecipeComponentCss />
      <SmallRecipeComponentCss />
      <SmallRecipeComponentCss />
    </div>
  </div>

)

export default App;



/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */