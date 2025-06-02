import React from "react";

function RecipeList({recipeList, deleteRecipe}) {
  
// design recipe table with delete button
// populated w/ recipeList items

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
              <td className="content_td"><p>{preparation}</p></td>
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

export default RecipeList;
