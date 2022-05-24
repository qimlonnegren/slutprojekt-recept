import styling from '../styling.module.css'
// import { useState, useEffect } from 'react'

const SingleRecipe = () => (
    <article className={styling.singleRecipe}>
        <img src="logo192.png" alt="logo" className={styling.singleRecipeImage} />
        <section className={styling.RecipeSection}>
            <h1 className={styling.sh1}>title</h1>
        </section>
        <section>
            <h3 className={styling.sh3}>ratings*</h3>
            <h3 className={styling.sh3}>* ingredienser</h3>
            <h3 className={styling.sh3}>* minuter</h3>
        </section>
        <h3 className={styling.sh3}>description</h3>
        <section className={styling.RecipeBottom}>
            <h4 className={styling.sh4}>ingredienser</h4>
            <h4 className={styling.sh4}>ingredienser-lista</h4>
        </section>
        <section>
         <h4>Instruktioner</h4>
         <h4>instruktions-lista</h4>
        </section>
        <section>
            <h4>Betygssätt receptet!</h4>
            <h4>*****</h4>
        </section>
        <section>
            <h4>Kommentarer!</h4>
            <h4>Kommentar-lista</h4>
        </section>
    </article>

)

export default SingleRecipe;