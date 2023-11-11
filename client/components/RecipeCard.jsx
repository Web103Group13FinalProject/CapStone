import '../styles/App.css';
import PropTypes from 'prop-types';

RecipeCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


function RecipeCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt={props.title} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
            </div>
            <a href="#" className="btn btn-primary">View Recipe</a>
        </div>
    );
}

export default RecipeCard;