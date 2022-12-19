import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import SideMenu from './components/SideMenu';
import SingleRecipe from './components/SingleRecipe';
// import SmallRecipeComponent from './components/SmallRecipeComponent';
import Recipes from './components/Recipes';
// import Title from './components/Title';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route index element={<Title />} /> */}
          <Route path=":recipes" element={<Recipes />} >
            <Route path=":singleRecipe" element={<SingleRecipe />} />
          </Route>
          <Route path='*' element={
            <div>
              <p>Nothing to see here!</p>
            </div>
          } />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
