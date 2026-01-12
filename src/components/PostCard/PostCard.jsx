export default function PostCard(){
    return(
        <div className="bg-white">
            {/* Post Content */}
            <div className="p-6">
                {/* Post Image */}
                <div className="rounded-xl overflow-hidden bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop" 
                        alt="Decorative sword"
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Author Name and Timestamp */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Alice</span>
                    </div>
                    <span className="text-xs text-gray-400">8 seconds</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-around">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Like</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Comment</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Share</span>
                </button>
            </div>

            {/* Comment Input */}
            <div className="px-6 py-3 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="text-blue-600 hover:text-blue-700 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div className="px-6 pb-6">
                {/* Single Comment */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-gray-800">Wyrpdf</h4>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}