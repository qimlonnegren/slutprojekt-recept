import './App.css'
import styling from './styling.module.css'
import Title from './components/Title'
import SideMenu from './components/SideMenu'
import Recipes from './components/Recipes'
import SingleRecipe from './components/SingleRecipe'
// import { Outlet, Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


const App = () => (

  <div className="App">
    <Title />
    <SideMenu />
    {/* <Link to="/sideMenu">Kategorier</Link> */}
  
    {/* <Link to="/recipes">Flera Recept</Link>
    <Link to="/:singleRecipe">1 Recept</Link>
 */}

    <div className={styling.smallRecipeContainer}>
      <Outlet />
      <Recipes />
      <Recipes />
      <Recipes />
    </div>
  </div>

)




export default App;
