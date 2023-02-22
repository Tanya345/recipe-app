import React from 'react'
import { NavLink } from 'react-router-dom'
import recipeIcon from '../images/recipe-icon.png'

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light ">
			<div className="container-fluid">
				<img src={recipeIcon} alt="" style={{ width: '60px', padding: '6px' }} />
				<h3 className="navbar-brand mx-2"><span className='text-danger'>F</span>OODPLAZA</h3>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/recipes">Recipes</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar