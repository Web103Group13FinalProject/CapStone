export interface Post {
    id: null | number,
    title: string,
    ingredients: string,
    instructions: string,
    user_id: null | number,
    Image_url: string,
}

export interface Member {
    id: null | number, 
    username: string,
    password: string,
    first_name: string,
    last_name: string,
}

{}