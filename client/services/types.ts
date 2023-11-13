export interface Post {
    id?: number,
    title: string,
    ingredients: string,
    instructions: string,
    member_id?: number,
    image: string,
}

export interface Member {
    id?: number, 
    username: string,
    password: number,
    name: string
}
