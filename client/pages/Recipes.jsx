// import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipies() {

    // const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/api/recipes")
    //         .then(response => response.json())
    //         .then(data => setRecipes(data))
    // }, []);

    // Temporary data until we connect to the backend
    const recipes = [
        {
            image: 'https://www.thecookierookie.com/wp-content/uploads/2023/02/homemade-alfredo-sauce-recipe-2-768x1152.jpg',
            title: 'Homemade Alfredo Sauce Recipe',
            description: 'This Homemade Alfredo Sauce Recipe is creamy, cheesy, and packed with garlic parmesan flavor!'
        },
        {
            image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2013/08/Eggs-Benedict-11.jpg',
            title: 'Eggs Benedict',
            description: 'Eggs Benedict is a classic American breakfast or brunch dish, consisting of two halves of an English muffin, each topped with Canadian bacon, a...'
        },
        {
            image: 'https://hips.hearstapps.com/hmg-prod/images/del099923-tuscan-chicken-wraps-web-0921-eb-hi-res-lead-6529d12f31290.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
            title: 'Tuscan Chicken Wraps',
            description: 'These Tuscan Chicken Wraps are loaded with tender chicken, tomatoes, artichokes, olives, and mozzarella cheese.'
        },
    ]

    return (
        <div className="recipes-container">
            {recipes.map(recipe => (
                <div className="col-sm-4" key={recipe.id}>
                    <RecipeCard
                        image={recipe.image}
                        title={recipe.title}
                        description={recipe.description}
                    />
                </div>
            ))}
        </div>
    )
}

export default Recipies;