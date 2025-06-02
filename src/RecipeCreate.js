import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

// default form, use to clear after submission
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

// state var for form
  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  // state var for form data
  // gets passed to parent component w/ createRecipe

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    //console.log("Submitted: ", formData);
    setFormData({...initialFormState});
  };

  // design form, handler = handleChange/handleSubmit
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table >
        <tbody>
          <tr>
            <td> <input placeholder="Name" id="name" name="name" onChange={handleChange} value={formData.name}/> </td>
            <td> <input placeholder="Cuisine" id="cuisine" name="cuisine" onChange={handleChange} value={formData.cuisine}/> </td>
            <td> <input placeholder="Image URL" id="photo" name="photo" onChange={handleChange} value={formData.photo}/> </td>
            <td> <textarea placeholder="Ingredients" id="ingredients" name="ingredients" onChange={handleChange} value={formData.ingredients}/> </td>
            <td> <textarea placeholder="Preparation" id="preparation" name="preparation" onChange={handleChange} value={formData.preparation}/> </td>
          
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
