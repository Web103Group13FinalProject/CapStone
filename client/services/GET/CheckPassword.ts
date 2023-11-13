import axios from 'axios'

export default async function CheckPassword(password: string) {
    try {
        const checkPassword = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/password/${password}`);
        return checkPassword.data;
    } catch (error) {
        console.log(error);
    }
};