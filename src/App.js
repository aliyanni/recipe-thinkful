import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const headerStyle = {
    fontFamily: "Ariel",
    fontsize: "24px",
    textAlign: "center",
  };

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const [recipes, setRecipes] = useState(RecipeData);
  const createNewRecipes = (newRecipe) =>
    setRecipes((currentRecipe) => [...currentRecipe, newRecipe]);
  const deleteRecipe = (selectedRecipe) =>
    setRecipes((currentRecipe) => {
      return currentRecipe.filter(
        (recipe) => recipe.name !== selectedRecipe.name
      );
    });
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.

  return (
    <>
      <header>
        <h1 style={headerStyle}>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate recipe={recipes} createNewRecipes={createNewRecipes} />
    </>
  );
}

export default App;
