import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
const SinglePage = () => {
    const {id} =useParams()
    const [post , setPost] = useState(null)

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setPost(json) )
    } , [id]);
  
    return (
    <div>
       {post && (
            <>
                <h1>{post.id}</h1>
                <h4>{post.title}</h4>
            </>
       )}
    </div>
  )
}

export default SinglePage