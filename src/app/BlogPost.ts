import { Comment } from "./Comment";
//import blogData from './blogData.json';
//import { BlogPost } from './BlogPost';


export class BlogPost{
    _id: string
    title: string;
    postDate: string;
    featuredImage: string;
    post: string;
    postedBy: string;
    comments: Array<Comment>;
    category: string;
    tags: Array<string>;
    isPrivate: boolean;
    views: number;
}
