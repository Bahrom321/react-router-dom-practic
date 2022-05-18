import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json) )
    } , []);


  return (
    <div>
        <h1>Blogs</h1>
        {posts.map(post=> (
            <Link key={post.id} to={`/blog/${post.id}`}>
                <h4>{post.title}</h4>
            </Link>
        ))}
    </div>
  )
}

export default Blog