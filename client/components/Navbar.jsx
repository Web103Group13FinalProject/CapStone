import { Link } from 'react-router-dom';
import '../styles/App.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/recipes">Recipes</Link>
                <Link className="nav-item nav-link" to="/add">Add Recipe</Link>
                <Link className="nav-item nav-link" to="/mealPlan">Meal Plan</Link>
            </div>
        </nav>
    )
}

export default Navbar;