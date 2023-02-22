import React, { useState, useContext } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../settings';
import bannerimag1 from '../images/bannerimag1.jpg'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useEffect } from 'react';
import { useRef } from 'react';

const Home = () => {
	let { watchList } = useContext(AppContext)
	const [recipeName, setRecipeName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const apiKey = process.env.REACT_APP_RECIPE_API;
	const [url, setUrl] = useState('')
	const count = useRef(0)

	const handleRecipeSearch = () => {
		if (!recipeName) {
			setErrorMessage('Please enter a recipe name to search for....')
		}
		else {
			count.current = 1
			setErrorMessage('');
			setUrl(`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&number=120&apiKey=${apiKey}`)
			navigate('/recipes', { state: { url: url } });
		}
	}

	const handleChangeRecipeName = (e) => {
		setRecipeName(e.target.value)
	}

	// console.log(watchList)
	return (
		<div className='Home'>
			<div className="w-100 d-flex flex-column text-light py-2 px-4 mx-5">
				<h2 className='px-3'>Cooking is a philosophy, it's not a recipe</h2>
				<p className='px-3' style={{ color: 'white', fontWeight: '350' }}>Learn how to make your favorite restaurant's dishes</p>
				<div className='mx-3 mt-3 d-flex' >
					<div className='d-flex flex-column'>
						<input className='recipeInput' type="text" name="recipe" id="recipe" placeholder='Enter recipe name' value={recipeName} onChange={handleChangeRecipeName} />
						{errorMessage && <small className='text-danger'>{errorMessage}</small>}
					</div>
					<button className='btn btnSearch' onClick={handleRecipeSearch}>Search</button>
				</div>

				{watchList.length > 0 &&
					<div className="d-flex">
						<p>WatchList</p>
					</div>
				}
			</div>

			{/* <div style={{ width: '14rem',marginTop:'15rem'}}>
			<Slider {...settings}>
				<div className="card" style={{ width: '16rem', alignSelf: 'flex-end', marginTop: '5em' }}>
					<img src={bannerimag1} className="card-img-top" alt="..." />
				</div>
				<div className="card" style={{ width: '16rem', alignSelf: 'flex-end', marginTop: '5em' }}>
					<img src="https://images.unsplash.com/photo-1543668900-9124915a121f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="card-img-top" alt="..." />
				</div><div className="card" style={{ width: '16rem', alignSelf: 'flex-end', marginTop: '5em' }}>
					<img src="https://images.unsplash.com/photo-1543668900-9124915a121f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="card-img-top" alt="..." />
				</div><div className="card" style={{ width: '16rem', alignSelf: 'flex-end', marginTop: '5em' }}>
					<img src="https://images.unsplash.com/photo-1543668900-9124915a121f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="card-img-top" alt="..." />
				</div><div className="card" style={{ width: '16rem', alignSelf: 'flex-end', marginTop: '5em' }}>
					<img src="https://images.unsplash.com/photo-1543668900-9124915a121f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="card-img-top" alt="..." />
				</div>
			</Slider>
			</div> */}
		</div >
	)
}

export default Home