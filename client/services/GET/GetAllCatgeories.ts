import axios from 'axios'

export default async function GetAllCategories() {
    try {
        const getAllCategories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`);
        return getAllCategories.data;
    } catch(error) {
        console.log(error);
    }
};