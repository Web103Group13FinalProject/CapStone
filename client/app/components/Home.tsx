import React from 'react';
import { Post } from '../../services/types';

interface HomeProps {
    posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {



    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="PostCardContainer">
                    {posts.map((post: Post) => (
                        <div id="PostCard" key={post.id}>
                            <div id="PostImageContainer">
                                <img id="PostImage" src={post.image} />
                            </div>
                            <div id="PostInformationContainer">
                                <p id='PostTitle'>Title: {post.title}</p>
                                <p id='PostIngredients'>Ingredients: {post.ingredients}</p>
                                <p id='PostInstructions'>Instructions: {post.instructions}</p>
                                <a href={`/member/${post.member_id}`}>See Member</a>
                            </div>
                        </div>
                    ))}
                </div>
            <style>
                {`
                    #Home {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #HomeContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #PostCardContainer {
                        display: flex;
                        position: relative;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                    }
                    #PostCard {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 200px;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        margin: 10px;
                        border: 1px solid white;
                    }
                    #PostImageContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 80%;
                        justify-content: center;
                        align-items: center;
                    }
                    #PostImage {
                        width: 100%;
                        height: 100%;
                    }
                    #PostInformationContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 60%;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                    }
                    #PostTitle {
                        font-size: 20px;
                        font-weight: bold;
                        color: white;
                    }
                    #PostIngredients {
                        font-size: 15px;
                        color: white;
                    }
                    #PostInstructions {
                        font-size: 15px;
                        color: white;
                    }    
                `}
            </style>
            </div>
        </div>
    );
};

export default Home;