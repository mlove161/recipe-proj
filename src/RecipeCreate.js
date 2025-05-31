import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    console.log("Submitted: ", formData);
    setFormData({...initialFormState});
  };

  // TODO: have submissions get added to current recipe list
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td> <input id="name" name="name" onChange={handleChange} value={formData.name}/> </td>
            <td> <input id="cuisine" name="cuisine" onChange={handleChange} value={formData.cuisine}/> </td>
            <td> <input id="photo" name="photo" onChange={handleChange} value={formData.photo}/> </td>
            <td> <textarea id="ingredients" name="ingredients" onChange={handleChange} value={formData.ingredients}/> </td>
            <td> <textarea id="preparation" name="preparation" onChange={handleChange} value={formData.preparation}/> </td>
          
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
