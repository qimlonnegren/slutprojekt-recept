import express, { Request, Response, json } from 'express';
import recipeModel from './models/recipe'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
// import cors from 'cors'

dotenv.config();

var cors = require('cors');
const app = express();

app.use(json());
app.use(cors({
    origin: "http://localhost:3000"
}));


const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => res.send('Hello world!'));


// Hämtar information för alla recept
app.get('/recipes', async (req, res) => {
    console.log("hej recept")
    let filter: any = {};
    if (req.query.search) {
        filter.title = req.query.search;
    }
    const recipes = await recipeModel.find(filter);
    // console.log(req.query.search)
    res.status(200).json(recipes);
})

//  Hämtar all information för ett recept med valt id
app.get('/recipes/:recipeId', async (req, res) => {
    console.log("hej enstaka recept")
    const recipe = await recipeModel.findById(req.params.recipeId);
    // recipeModel.find();
    res.status(200).json(recipe);
})

//  Hämtar alla kategorier
app.get('/categories', async (req, res) => {
    console.log("hej alla kategorier")
    const categories = await recipeModel.find({}).distinct('category').exec();
    res.status(200).json(categories);
})

//   Hämtar alla recept för en viss kategori
app.get('/categories/:categoryName/recipes', async (req, res) => {
    console.log("hej alla recept för en kategori och searched")
    let filter: any = { category: req.params.categoryName };
    if (req.query.search) {
        filter.title = req.query.search;
    }
    const categories = await recipeModel.find(filter).exec();
    res.status(200).json(categories);
})


// Lägger till en ny rating för ett recept
app.post('/recipes/:recipeId/ratings', async (req, res) => {
    const recipe = await recipeModel.findById(req.params.recipeId).exec();
    console.log(recipe)
    recipe?.ratings.push(req.body.rating)
    await recipe?.save()
    res.status(200).json(recipe);
})


if (process.env.MONGO_DB_CONNECTION_STRING) {
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => {
            console.log("Backend started on port", port)
        })
    });
} else {
    console.log('Configuration process.env.MONGO_DB_CONNECTION_STRING not set')
}

