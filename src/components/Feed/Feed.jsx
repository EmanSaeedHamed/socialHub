import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import PostsSkeleton from "../PostsSkelleton/PostsSkeleton";

export default function Feed({posts, getAllPosts}){
   
    return(
        <div className="min-h-screen flex items-center justify-center mt-8">
            <div className="w-full max-w-2xl overflow-hidden">
                {/* Header */}
                <h2 className="text-2xl font-bold mb-4 text-gray-400">
                    Latest Posts
                </h2>

                {/* Post Card */}
                {posts ? posts.slice(0,10).map((post)=> {return <PostCard postInfo={post} key={post._id} getAllPosts={getAllPosts}/>}) :  [...Array(5)].map((value,i)=>{return <PostsSkeleton key={i}/>})}
                
                
            </div>
        </div>
    )
}