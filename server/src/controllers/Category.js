import { db } from '../db.js'

class CategoryController {
    async getAllCategories(req, res){
        try {
            const categories = await db.manyOrNone("SELECT * FROM category")
            return res.json(categories);
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "Error occured when getting all categories"})
        }
    }
};

export { CategoryController }