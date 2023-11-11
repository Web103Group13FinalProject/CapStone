import { Link } from 'react-router-dom';
import '../styles/App.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Meal Master!</h1>
            <p>Plan your meals with ease using our simple and intuitive meal planning tool.</p>
            <Link to="/recipes">
                <button className="btn">Get Started</button>
            </Link>
        </div>
    )
}

export default Home;
