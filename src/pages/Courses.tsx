import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const Courses = () => {
    const [posts, setPosts] = useState<Post[] | undefined>(undefined);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <ul> Наши Курсы
            {
            posts?.map(post => (
                <Link key={post.id} to={`/courses/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))
            }
        </ul>
    )
}