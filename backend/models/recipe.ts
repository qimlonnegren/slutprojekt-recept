import { Schema, model } from "mongoose";

export interface ingredientType {
    ingredient: String;
    amount: Number;
    unit: String;
}

export interface commentType {
    comment: String;
    name: String;
    createdAt: Date;
}

export interface recipeType {
    // id: String;
    title: String;
    description: String;
    imageUrl: String;
    timeInMins: Number;
    ratings: Array<Number>;
    category: Array<String>;
    ingredients: Array<ingredientType>;
    instructions: Array<String>;
    comments: Array<commentType>;
}

const ingredientSchema = new Schema<ingredientType>({
    ingredient: { type: String, required: true },
    amount: { type: Number, required: true },
    unit: { type: String, required: true },
});

const commentSchema = new Schema<commentType>({
    comment: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, required: true },
});

const recipeSchema = new Schema<recipeType>({
// id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timeInMins: { type: String, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    ingredients: { type: [ingredientSchema], required: true },
    instructions: { type: [String], required: true },
    comments: { type: [commentSchema], required: true },
});


const recipeModel = model<recipeType>("Recipe", recipeSchema);


export default recipeModel;