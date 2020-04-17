import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'b26801a9';
  const APP_KEY = '35ba3776341eaf73c7d9f87ba3ca364c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('egg');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);

    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

  return (
      <div className="App">

        <h1 className="title"> Recipe guide</h1>

        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} placeholder="Choose your main ingredient" onChange={updateSearch} />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="recipes"> 
        {recipes.map((recipe, index) => (
            <Recipe 
            key = {index}
            title={recipe.recipe.label} 
            url={recipe.recipe.url}
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
      </div>
  )
}

export default App;
