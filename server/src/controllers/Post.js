import pgp from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  };
const db = pgp()(connection);

class PostController {

    async getAllPosts(req, res){
        try{
            const allPosts = await db.any('SELECT * FROM post')
            return res.status(200).json(allPosts)
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "Error occured when fetching all posts"})
        }
    }

    async getPostById(req, res){
        const id = req.params.id
        try{
            const post = await db.one('SELECT * FROM post WHERE id = $1', id)
            return res.status(200).json(post)
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "error occured when fetching for post by id"})
        }
    }

    createPost(req, res, data){
        const post = data;
        if(
            typeof post.title === 'string' &&
            typeof post.ingredients === 'string' &&
            typeof post.instructions === 'string' &&
            typeof id === number &&
            (typeof post.user_id === number || post.user_id === null)
        ){
            db.none("INSERT INTO post (title, ingredients, instructions, user_id) VALUES ($1, $2, $3, $4)", [post.title, post.ingredients, post.instructions, post.user_id])
            .then(() => {
                console.log("Post Added")
            })
            .catch((error) => {
                console.log(error)
            })
        }
        else {
            console.log("Invalid data provided. Please check your input.");
        }
    }

    updatePostById(req, res, data){
        const id = req.params.id
        const post = data;
        if(
            typeof post.title === 'string' &&
            typeof post.ingredients === 'string' &&
            typeof post.instructions === 'string' &&
            typeof id === number &&
            (typeof post.user_id === number || post.user_id === null)
        ){
                db.none('UPDATE post SET title = $1, ingredients = $2, instructions = $3, user_id = $4 WHERE id = $5', [post.title, post.ingredients, post.instructions, post.user_id, id])
                .then(() => {
                    console.log("Post Updated")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            console.log("Invalid data provided. Please check your input.");
        }
    }

    deleteCupById(req, res){
        const id = req.params.id
        db.none('DELETE FROM post WHERE id = $1 ', id)
        .then(() => {
            res.status(200).json({message: "Post deleted"})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({error: "error occured when deleting post"})
        })
    }


}

export { PostController };