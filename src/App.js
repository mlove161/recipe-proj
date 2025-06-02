import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  // state var to store/add recipes, passed into RecipeList to display
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
   setRecipes((currentRecipes) => [
    ...currentRecipes, newRecipe
   ]); 
   
  }

  // delete recipe w/ index, passed into RecipeList
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index != indexToDelete))
  }
  

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipeList={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
