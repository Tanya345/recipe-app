import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

import back_img2 from '../images/back_img2.jpg';
const apiKey = process.env.REACT_APP_RECIPE_API;

const RecipeCard = ({ recipe }) => {
	let { watchList, setWatchList } = useContext(AppContext);
	const [recipeInWatchList, setRecipeInWatchList] = useState(false);

	const handleToggleRecipeWatch = (recipe) => {
		if (!recipeInWatchList) {
			let arr = watchList;
			arr.push(recipe);
			setWatchList(arr)
		}
		setRecipeInWatchList(prevState => !prevState)
	}

	return (
		<div className="card">
			<div className="imgDiv">
				<img src={recipe.image ? recipe.image : back_img2} className="card-img-top" alt="recipeImg" />
			</div>
			<div className="card-body d-flex flex-column justify-content-center">
				<div className="d-flex justify-content-between">
					<h5 className="card-title">{recipe.title}</h5>
					<span role="button" onClick={() => handleToggleRecipeWatch(recipe,apiKey)}>{recipeInWatchList ? (
						<div className='d-flex flex-column align-items-center'>
							<i className="fa-solid fa-square-check"></i>
							<span>Saved</span>
						</div>)
						: (
							<div className='d-flex flex-column align-items-center'>
								<i className="fa-solid fa-square-plus"></i>
								<span>Save</span>
							</div>
						)
					}
					</span>
				</div>
				{/* <p className='mb-1'>Ready in<span className='mx-2'>{recipe?.readyInMinutes} minutes</span></p>
				<p className='mb-1'>Serving:<span className='mx-2'>{recipe?.servings}</span></p> */}

				<div className='d-flex justify-content-between mt-4'>
					<Link to={"/recipeInfo"} className="card-link" state={{ recipeId: recipe.id }}>Get Recipe</Link>
					<a className="card-link" href={`https://www.youtube.com/results?search_query=${recipe.title}`}>See related videos</a>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard