import styling from '../styling.module.css'
import { IRecipe } from './Recipes'


interface props {
    recipe: IRecipe
}

const SmallRecipeComponent = ({ recipe }: props) =>

    <article className={styling.PreviewRecipe}>
        <img src="logo192.png" alt="logo" className={styling.recipeImage} />
        <section className={styling.RecipeSection}>
            <h1 className={styling.h1}>{recipe.title}</h1>
            <h2 className={styling.h2}>{recipe.ratings.length}stars*({recipe.ratings.length})</h2>
        </section>
        <h3 className={styling.h3}>{recipe.description}</h3>
        <section className={styling.RecipeBottom}>
            <h4 className={styling.h4}>{recipe.ingredients.length} ingredienser</h4>
            <h4 className={styling.h4}>{recipe.timeInMins.toString()} minuter</h4>
        </section>
    </article>

export default SmallRecipeComponent;

