import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import PostsSkeleton from '../../components/PostsSkelleton/PostsSkeleton';

export default function PostDetails() {
    const [post , setPost]= useState(null)
    const {token} = useContext(AuthContext);
    const {id} = useParams();
    async function GetPostDetails() {
        try {
            const options = {
            url:`https://linked-posts.routemisr.com/posts/${id}`,
            method:'GET',
            headers:{
                token,
            },
        };
        const {data} = await axios.request(options);
        console.log(data.post);
        
        if(data.message == 'success'){
            setPost(data.post);
              
        }
        } catch (error) {
            console.log(error);
            
        }
        
    }
    useEffect(()=>{GetPostDetails()},[]);
  return (
    <>
      <section className='mt-10'>
        <div className="container max-w-2xl mx-auto py-12">
            {post ? <PostCard postInfo={post} commentsLimit={30}/> : <PostsSkeleton/>}
        </div>
      </section>    
    </>
  )
}
