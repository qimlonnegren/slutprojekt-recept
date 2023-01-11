import './App.css'
import styling from './styling.module.css'
import Title from './components/Title'
import SideMenu from './components/SideMenu'
import Recipes from './components/Recipes'
import SingleRecipe from './components/SingleRecipe'
// import { Outlet, Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"


const App = () => (

  <div className="App">
    <Title />
    <SideMenu />

    <div className={styling.smallRecipeContainer}>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
        <Route path="/category/:category" element={<Recipes />} />
        
        <Route path='*' element={
            <div>
              <p>Nothing to see here!</p>
            </div>
          } />
        {/* </Route> */}
      </Routes>
    </div>
  </div>
)

export default App;
