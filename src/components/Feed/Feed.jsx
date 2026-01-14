import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Feed(){
    const [posts,SetPosts] = useState(null)
    const {token} = useContext(AuthContext);
    async function getAllPosts() {
      try {
          const options = {
            url: 'https://linked-posts.routemisr.com/posts?limit=50',
            method: 'GET',
            headers: {
                token
            },
        }
        const {data} = await axios.request(options);
        console.log(data.posts);
        SetPosts(data.posts)
        
        
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
        getAllPosts()
    },[]);
    return(
        <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-lime-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-lime-600 to-lime-500 px-6 py-5 flex items-center justify-between rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-6 h-6 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-extrabold text-white">Social Feed</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all flex items-center justify-center group">
                            <svg className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white hover:bg-lime-50 transition-all shadow-md flex items-center justify-center group">
                            <svg className="w-5 h-5 text-lime-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Post Card */}
                {posts && posts.map((post)=> {return <PostCard postInfo={post} key={post._id}/>})}
                
                
            </div>
        </div>
    )
}