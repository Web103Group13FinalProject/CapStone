import pgp from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

const connection = {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};

const db = pgp()(connection)

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