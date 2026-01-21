import user from '../../../assets/user.png'
export default function PostComment({comment, commentId}) {
  return (
    <>
      {/* Comments Section */}
            <div className="px-6 pb-6 pt-4">
                {/* Single Comment */}
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-lime-50 to-white rounded-xl border border-lime-100 shadow-sm">
                    <div className="w-9 h-9 bg-gradient-to-br from-lime-600 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <img className="rounded-full w-10 h-10 object-cover" src={comment.commentCreator.photo.includes("undefined")? user : comment.commentCreator.photo} alt="" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-bold text-lime-600">{comment.commentCreator.name}</h4>
                            <button className="text-lime-500 hover:text-lime-600 hover:bg-lime-100 p-1 rounded-lg transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="text-sm text-gray-700">{comment.content}</p>
                        <div className="flex items-center gap-4 mt-2">
                            <button className="text-xs text-lime-600 font-semibold hover:underline">Like</button>
                            <button className="text-xs text-lime-600 font-semibold hover:underline">Reply</button>
                            <span className="text-xs text-lime-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}