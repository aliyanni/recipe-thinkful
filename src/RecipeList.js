import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const rowStyle = {
    background: "beige",
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => {
            return (
              <tr key={index} style={index % 2 === 0 ? rowStyle : {}}>
                {Object.keys(recipe).map((key) => {
                  return (
                    <td key={`${recipe.name}-${recipe[key]}`}>
                      {key === "photo" ? (
                        <img
                          alt={recipe.name}
                          src={recipe[key]}
                          style={{ width: "100%" }}
                        />
                      ) : (
                        recipe[key]
                      )}
                    </td>
                  );
                })}
                <td>
                  <button
                    onClick={() => deleteRecipe(recipe)}
                    name="delete"
                    value="deleteButton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
