import { db } from '../db.js'

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

    async getPostsFromMember(req, res) {
        const id = req.params.id
        try {
            const post = await db.manyOrNone('SELECT * FROM post WHERE member_id = $1', id)
            return res.status(200).json(post)
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "error occured when fetching for post by member id"})
        }
    }

    createPost(req, res, data){
        const post = data;
        if(
            typeof post.title === 'string' &&
            typeof post.ingredients === 'string' &&
            typeof post.instructions === 'string' &&
            (typeof post.id === number || typeof post.id === null) &&            
            (typeof post.member_id === number || post.member_id === null)
        ){
            db.none("INSERT INTO post (title, ingredients, instructions, member_id) VALUES ($1, $2, $3, $4)", [post.title, post.ingredients, post.instructions, post.member_id])
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
            typeof post.id === number &&
            (typeof post.member_id === number || post.member_id === null)
        ){
                db.none('UPDATE post SET title = $1, ingredients = $2, instructions = $3, member_id = $4 WHERE id = $5', [post.title, post.ingredients, post.instructions, post.member_id, id])
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

    deletePostById(req, res){
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