import { useContext, useEffect, useState } from "react";
import PostComment from "../ui/PostComment/PostComment";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function CommentsSection({postInfo , commentsLimit=2 , getAllPosts}) {
    const [content , setContent] = useState('');
    const {token} = useContext(AuthContext);
    async function createComment(id,content){
        try {
            const options = {
                url:'https://linked-posts.routemisr.com/comments',

                method:'POST',
                headers:{
                    token,
                    "Content-Type": "application/json"
                },
                data:{
                    content:content,
                    post:id,
                    
            
                },
            };
            const {data} = await axios.request(options);
            console.log(data);
         if(data.message == 'success'){
            toast.success("comment creates successfully");
            getAllPosts();
            
         }
            
        } catch (error) {
            console.log(error);
            toast.error("comment can not be created")
            
        }
    }
  return (
    <>
     {/* Comment Input */}
            <form className="px-6 py-4 border-t border-lime-100 bg-lime-200">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-lime-600 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                    </div>
                    
                        <input 
                        onChange={(e)=>{setContent(e.target.value)}}
                        type="text" 
                        placeholder="Add a comment..." 
                        className="flex-1 px-4 py-2.5 bg-white border border-lime-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all placeholder:text-lime-400"
                    />
                    <button 
                    disabled={!content}
                     onClick={(e)=>{
                          e.preventDefault();
                        if(content != ''){
                            createComment(postInfo._id,content)
                        }
                     }}
                     type="submit" className="cursor-pointer disabled:cursor-not-allowed text-lime-600 hover:text-lime-500 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                    
                </div>
            </form>

           {postInfo.comments.length > 0 ? postInfo.comments.slice(0,commentsLimit).map((comment) => (
  <PostComment key={comment._id} comment={comment} commentId={comment._id} />
)) : <p className=" text-lime-600 text-center pb-2">No comments yet</p>}


    </>
  )
}

