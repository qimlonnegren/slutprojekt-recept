import styling from '../styling.module.css'
// import { useState, useEffect } from 'react'

const SingleRecipe = () => (
    <article className={styling.singleRecipe}>
        <img src="logo192.png" alt="logo" className={styling.singleRecipeImage} />
        <section className={styling.SingleRecipeSection}>
            <h1 className={styling.sh1}>Title</h1>
            <h3 className={styling.sh3}>Description</h3>
        </section>
        <section className={styling.SingleRecipeSectionRow}> 
            <h3 className={styling.sh3}>* Ratings</h3>
            <h3 className={styling.sh3}>* Ingredienser</h3>
            <h3 className={styling.sh3}>* Minuter</h3>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Ingredienser</h4>
            <h4 className={styling.sh4}>Ingredienser-lista</h4>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Instruktioner</h4>
            <h4 className={styling.sh4}>instruktions-lista</h4>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Betygssätt receptet!</h4>
            <h4 className={styling.sh4}>*****</h4>
        </section>
        <section className={styling.SingleRecipeSectionColumn}>
            <h4 className={styling.sh4}>Kommentarer!</h4>
            <h4 className={styling.sh4}>Kommentar-lista</h4>
        </section>
    </article>

)

export default SingleRecipe;