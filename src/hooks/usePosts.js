import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function usePosts() {
   const [posts,SetPosts] = useState(null)
    const {token} = useContext(AuthContext);
    async function getAllPosts() {
      try {
          const options = {
            url: 'https://linked-posts.routemisr.com/posts?limit=50&page=108',
            method: 'GET',
            headers: {
                token
            },
        }
        const {data} = await axios.request(options);
        console.log(data.posts);
        SetPosts(data.posts.reverse())
        
        
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
        getAllPosts()
    },[]);

    return {posts , getAllPosts}
}
