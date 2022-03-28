import React, { useState } from "react";

function RecipeCreate({ recipe, createNewRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [form, setForm] = useState({ ...initialState });
  const handleSetForm = (event, fieldName) =>
    setForm({ ...form, [fieldName]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, cuisine, photo, ingredients, preparation } = form;
    createNewRecipes({ name, cuisine, photo, ingredients, preparation });
    setForm({ ...initialState });
  };

  const formStyle = {
    textAlign: "inherit",
  };

  return (
    <form name="create">
      <table style={{ marginTop: "20px" }}>
        <tfoot style={{ background: "beige" }}>
          <tr>
            <td style={formStyle}>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => handleSetForm(e, "name")}
                  value={form.name}
                />
              </label>
            </td>

            <td style={formStyle}>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={(e) => handleSetForm(e, "cuisine")}
                  value={form.cuisine}
                />
              </label>
            </td>

            <td style={formStyle}>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  onChange={(e) => handleSetForm(e, "photo")}
                  value={form.photo}
                />
              </label>
            </td>

            <td style={formStyle}>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  placeholder="Ingredients"
                  rows={3}
                  onChange={(e) => handleSetForm(e, "ingredients")}
                  value={form.ingredients}
                />
              </label>
            </td>

            <td style={formStyle}>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  placeholder="Preparation"
                  rows={3}
                  onChange={(e) => handleSetForm(e, "preparation")}
                  value={form.preparation}
                />
              </label>
            </td>

            <td>
              <button type="submit" onClick={handleSubmit}>
                Create
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;
