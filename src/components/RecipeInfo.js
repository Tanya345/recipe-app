import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const apiKey = process.env.REACT_APP_RECIPE_API;

const RecipeInfo = () => {
	// setShowNav(false)
	document.title = "FoodPlaza | Recipes | Cooking Tips | Falfal burger Smoothie"
	const location = useLocation()
	// console.log(location)
	let { recipeId } = location.state;
	let api = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`

	const [recipeData, setRecipeData] = useState([])
	useEffect(() => {
		async function fetchData() {
			let data = localStorage.getItem('recipesData');
			if (data) {
				setRecipeData(JSON.parse(data));
				console.log('localStorage')
			}
			else {
				const res = await fetch(api)
				const result = await res.json()
				localStorage.setItem('recipesData', JSON.stringify(result));
				setRecipeData(result)
				console.log(result)
			}
		}
		fetchData()

	}, [])

	console.log(recipeData)
	return (
		<div className='RecipeInfo'>
			<div className="container">
				<div className="d-flex justify-content-between" style={{ width: "100vw" }}>
					{/* <div className='d-flex' style={{width:"100vw"}}> */}
					<img className='mx-2' src={recipeData.image} alt="" />
					{/* </div> */}
					{/* <div className='d-flex flex-column px-2 mx-2'>
						<h2>{recipeData.title}</h2>

					</div> */}
				</div>
				<div className="d-flex flex-column my-3 py-3">
					<h3>About</h3>
					<p className='text-light'>{(recipeData.summary)?.replace(/(<([^>]+)>)/gi, "")}</p>
				</div>
			</div>
		</div>
	)
}

export default RecipeInfo