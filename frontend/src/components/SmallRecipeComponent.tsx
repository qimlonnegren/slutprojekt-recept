import styling from '../styling.module.css'
import { IRecipe } from './Recipes'


interface props {
    recipe: IRecipe
}

const SmallRecipeComponent = ({ recipe }: props) =>

    <article className={styling.recipeArticle}>
        <img src="logo192.png" alt="Recipe" className={styling.recipeImage} />
        <div className={styling.recipeDiv}>
            <h1 className={styling.h1}>{recipe.title}</h1>
            <h2 className={styling.h2}>{recipe.ratings.length}stars*({recipe.ratings.length})</h2>
        </div>

        <div className={styling.recipeDiv}>
            <h3 className={styling.h3}>{recipe.description}</h3>
        </div>

        <div className={styling.recipeDiv}>
            <p className={styling.p}>{recipe.ingredients.length} ingredienser</p>
            <p className={styling.p}>{recipe.timeInMins.toString()} minuter</p>
        </div>
    </article>

export default SmallRecipeComponent;

