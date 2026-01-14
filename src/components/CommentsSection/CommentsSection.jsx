import PostComment from "../ui/PostComment";

export default function CommentsSection() {
  return (
    <>
     {/* Comment Input */}
            <div className="px-6 py-4 border-t border-lime-100 bg-lime-200">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-lime-600 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        className="flex-1 px-4 py-2.5 bg-white border border-lime-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all placeholder:text-lime-400"
                    />
                    <button className="text-lime-600 hover:text-lime-500 hover:scale-110 transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>

           <PostComment/>
           <PostComment/>

    </>
  )
}
