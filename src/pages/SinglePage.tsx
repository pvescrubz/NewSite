import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const SinglePage = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<Post | null>(null);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [id]);

    return (
        <div>
           {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </>
           )}
         
        </div>
    )
}