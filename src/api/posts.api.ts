import axios from 'axios'
import { Comments } from '../models/comments';
import { Posts } from '../models/posts';
import { User } from '../models/user';


export const GetPosts = async (): Promise<Posts[]> => {
    const item = await axios.get<Posts[]>("https://jsonplaceholder.typicode.com/posts").then(el => el.data);
    return item; 
}

export const GetPostAuthor = async (id: number): Promise<User> => {

    const item = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then(el => el.data);
    return item; 
}

export const GetComment = async (postid: number): Promise<Comments[]> => {

    const item = await axios.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`).then(el => el.data);
    return item; 
}