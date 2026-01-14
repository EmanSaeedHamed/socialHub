import CommentsSection from "../CommentsSection/CommentsSection";

export default function PostCard( {postInfo}){
    return(
        <div className=" mt-12 bg-lime-200 rounded-2xl">
            {/* Post Content */}
            <div className="p-6">
                 {/* Author Name and Timestamp */}
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-lime-600 to-lime-500 rounded-full flex items-center justify-center shadow-md ring-2 ring-lime-200">
                            <img src={postInfo.user.photo} alt=""  className="w-full rounded-full"/>
                        </div>
                        <div>
                            <span className="text-sm font-bold text-lime-600">{postInfo.user.name}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-lime-500 bg-lime-50 px-3 py-1 rounded-full font-medium">{new Date(postInfo.createdAt).toLocaleString()}</span>
                    <button className="text-lime-500 hover:text-lime-600 hover:bg-lime-100 p-1 rounded-lg transition-all cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                </svg>
                            </button>
                    </div>
                </div>
                {/*  Post Text */}
                <p className="p-4 text-xl">
                    {postInfo.body}
                </p>
                {/* Post Image */}
                {postInfo.image ? <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-lime-50 to-lime-100 shadow-lg ring-1 ring-lime-200">
                    <img 
                        src={postInfo.image}
                        alt="Decorative sword"
                        className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div> : ""}

               
            </div>

            {/* Action Buttons */}
            <div className="px-6 py-4 border-t border-lime-100 flex items-center justify-around">
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-lime-50 transition-all">
                    <svg className="w-5 h-5 text-lime-600 group-hover:scale-110 group-hover:fill-lime-600 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-lime-600">Like</span>
                </button>
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-lime-50 transition-all">
                    <svg className="w-5 h-5 text-lime-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm font-semibold text-lime-600">Comment</span>
                </button>
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-lime-50 transition-all">
                    <svg className="w-5 h-5 text-lime-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm font-semibold text-lime-600">Share</span>
                </button>
            </div>
             
             {/* comments */}
              <CommentsSection/>

        </div>
    )
}