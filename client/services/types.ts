export interface Category {
    id?: number;
    name: string;
};

export interface Member {
    id?: number;
    username: string;
    password: number;
    name: string;
    category_id?: number;
};

export interface Post {
    id?: number;
    title: string;
    ingredients: string;
    instructions: string;
    image: string;
    member_id?: number;
    category_id?: number;
};

export interface Password {
    id?: number;
    password: string;
};