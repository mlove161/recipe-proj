import React from "react";

function RecipeList({recipeList, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

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
          {recipeList && recipeList.map(({name,cuisine,photo,ingredients,preparation,actions}, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{cuisine}</td>
              <td><img src={photo} /></td>
              <td className="content_td"><p>{ingredients}</p></td>
              <td>{preparation}</td>
              <td>
                <button type="submit" name="delete" onClick={() =>deleteRecipe(index)}>Delete</button>
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
       
        
    </div>
  )
}

// add list to recipecreate
export default RecipeList;
