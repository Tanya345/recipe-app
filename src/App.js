import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Recipes from './components/Recipes';
import { useState } from 'react';
import RecipeInfo from './components/RecipeInfo';

export const AppContext = React.createContext([]);

function App() {
  const [watchList, setWatchList] = useState([])
  const [showNav, setShowNav] = useState(true);

  return (

    <AppContext.Provider value={{ watchList, setWatchList }}>
      <Router>
        {showNav &&
          <NavBar />
        }
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/recipeInfo" element={<RecipeInfo setShowNav={setShowNav} />} />
        </Routes>
      </Router>
    </AppContext.Provider>

  );
}

export default App;
