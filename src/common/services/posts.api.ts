import { User, Posts, Comments } from '@common/index';
import axios from 'axios';

export class TestApi { 

    public static GetPosts = async (): Promise<Posts[]> => {
        const item = await axios.get<Posts[]>("https://jsonplaceholder.typicode.com/posts").then(el => el.data);
        return item; 
    }
    
    public static GetPostAuthor = async (id: number): Promise<User> => {
        const item = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then(el => el.data);
        return item; 
    }
    
    public static GetComment = async (postid: number): Promise<Comments[]> => {
        const item = await axios.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`).then(el => el.data);
        return item; 
    }
}
