import '../globals.css'
 
export default function Home(post: any) {
    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="PostCardContainer">
                    {post.post.map((post:any) => (
                        <div id="PostCard" key={post.id}>
                            <div id="PostImageContainer">
                                <img id="PostImage" src={post.Image_url}/>
                            </div>
                            <div id="PostInformationContainer">
                                <p id='PostTitle'>Title: {post.title}</p>
                                <p id='PostIngredients'>Ingredients: {post.ingredients}</p>
                                <p id='PostInstructions'>Instructions: {post.instructions}</p>
                            </div>
                        </div>
                    ))}
            <style>
                {`
                    #Home {
                        display: flex;
                        position: relative;
                        width: 99%;
                        height: 180vh;
                    }
                    #HomeContainer {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                    }
                    #PostCardContainer {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        overflow-y: scroll;
                    }
                    #PostCard {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        width: 1000px;
                        height: 400px;
                        margin: 10px;
                        border: 1px solid white;
                    }
                    #PostImageContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40%;
                        height: 80%;
                    }
                    #PostImage {
                        width: 100%;
                        height: 100%;
                    }
                    #PostInformationContainer {
                        display: flex;
                        position: relative;
                        flex-direction: column;
                        width: 50%;
                        height: 60%;
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
        </div>
    )
}