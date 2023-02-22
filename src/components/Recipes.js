import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { useLocation } from 'react-router-dom';
const apiKey = process.env.REACT_APP_RECIPE_API;

const Recipes = () => {
	const [recipeName, setRecipeName] = useState('')
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=150&query=${recipeName}`;
	// const { state } = useLocation()
	// // let { url } = state;
	// console.log(state)
	const [recipes, setRecipes] = useState([]);
	const [api, setApi] = useState(url)
	useEffect(() => {
		async function fetchData() {
			let data = localStorage.getItem('recipes');
			if (data) {
				setRecipes(JSON.parse(data));
				console.log('localStorage')
			}
			else {
				const res = await fetch(url)
				const result = await res.json()
				localStorage.setItem('recipes', JSON.stringify(result.results));
				setRecipes(result.results)
				console.log(result.results)
			}
		}
			fetchData()

		}, [recipeName, url])

	const handleRecipeSearch = () => {
		console.log(apiKey)
		console.log(recipeName)
		// setApi(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${recipeName}`)
	}

	const handleChangeRecipeName = (e) => {
		setRecipeName(e.target.value)
	}
	return (
		<div className="Recipes">
			<div className='container d-flex justify-content-center flex-wrap flex-column'>
				<div className='mx-3 mt-3 d-flex mb-2' >
					<div className='d-flex flex-column'>
						<input className='recipeInput' type="text" name="recipe" id="recipe" placeholder='Enter recipe name' value={recipeName} onChange={handleChangeRecipeName} />
						{/* {errorMessage && <small className='text-danger'>{errorMessage}</small>} */}
					</div>
					{/* <button className='btn btnSearch' onClick={handleRecipeSearch}>Search</button> */}
				</div>
				{recipes.map((recipe, i) => {
					return (
						<RecipeCard recipe={recipe} key={recipe.id} />
					)
				})}

			</div>
		</div>
	)
}

export default Recipes