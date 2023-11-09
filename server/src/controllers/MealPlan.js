import pgp from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

const connection = {
    connectionString: process.env.DATABASE_URL + "?sslmode=require",
};

const db = pgp()(connection)

class MealPlanController {
    async getAllMealPlans(req, res){
        try {
            const mealPlans = await db.manyOrNone("SELECT * from meal_plan")
            return res.json(mealPlans);
        }
        catch(error){
            console.log(error)
            return res.status(500).json({error: "Error occured when fetching all meal plans"})
        }
    }

    createMealPlan(req, res, data){
        const mealPlan = data
        if(
            (typeof mealPlan.id === number || typeof mealPlan.id === null) &&
            typeof mealPlan.name === 'string' &&
            (typeof mealPlan.category_id === number || typeof mealPlan.category_id === null) &&
            typeof mealPlan.contents === 'string' &&
            (typeof mealPlan.member_id === number || typeof mealPlan.member_id === null) 
        ){
            db.none("INSERT INTO meal_plan (name, category_id, contents, member_id) VALUES ($1, $2, $3, $4)",[mealPlan.name, mealPlan.category_id, mealPlan.contents, mealPlan.member_id])
            .then(() => {
                console.log("Meal Plan Created")
            })
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            console.log("Invalid data provided. Please check your input.");
        }
    }

    deleteMealPlanById(req, res){
        const id = req.params.iddb.none("DELETE FROM meal_plan WHERE id = $1", id)
        .then(() => {
            res.status(200).json({message: "Meal Plan deleted"})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({error: "error occured when deleting meal plan"})
        })
    }
}

export { MealPlanController }