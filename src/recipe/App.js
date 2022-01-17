import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('chicken');

   useEffect ( () => {
     getRecipes();
   }, [query])

   const getRecipes = async () => {
      const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      // console.log(data.hits);
      setRecipes(data.hits);
   }

   const updateSearch = e => {
     setSearch(e.target.value)
   };

   const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
   }
   
    return (
      <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
              title = {recipe.recipe.label}
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
              calories = {recipe.recipe.calories}
            />
            ))}        
        </div>
      
      </div>
    );
}

export default App;