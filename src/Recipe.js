import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, url, image, ingredients}) => {
    return (
        <div  className={style.recipe}>
            <div className={style.text}>
            <h1>{title}</h1>
            <ul>Ingredients : 
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={url}>Link of the recipe</a>
            </div>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;