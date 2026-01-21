export default function PostsSkeleton() {
    return (
        <div className="mt-12 bg-lime-200 rounded-2xl animate-pulse">
            {/* Post Content */}
            <div className="p-6">
                {/* Author Name and Timestamp Skeleton */}
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Avatar Skeleton */}
                        <div className="w-10 h-10 bg-lime-300 rounded-full"></div>
                        {/* Name Skeleton */}
                        <div className="h-4 w-24 bg-lime-300 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-3">
                        {/* Date Skeleton */}
                        <div className="h-6 w-20 bg-lime-300 rounded-full"></div>
                        {/* Menu Skeleton */}
                        <div className="w-5 h-5 bg-lime-300 rounded"></div>
                    </div>
                </div>

                {/* Post Text Skeleton */}
                <div className="p-4 space-y-3">
                    <div className="h-4 bg-lime-300 rounded w-full"></div>
                    <div className="h-4 bg-lime-300 rounded w-5/6"></div>
                    <div className="h-4 bg-lime-300 rounded w-4/6"></div>
                </div>

                {/* Post Image Skeleton */}
                <div className="rounded-2xl overflow-hidden bg-lime-300 h-96 w-full"></div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="sm:px-6 py-4 border-t border-lime-100 flex items-center justify-around">
                {/* Like Button Skeleton */}
                <div className="flex items-center gap-2 px-5 py-2.5">
                    <div className="w-5 h-5 bg-lime-300 rounded"></div>
                    <div className="h-4 w-10 bg-lime-300 rounded"></div>
                </div>
                {/* Comment Button Skeleton */}
                <div className="flex items-center gap-2 px-5 py-2.5">
                    <div className="w-5 h-5 bg-lime-300 rounded"></div>
                    <div className="h-4 w-6 bg-lime-300 rounded"></div>
                </div>
                {/* Share Button Skeleton */}
                <div className="flex items-center gap-2 px-5 py-2.5">
                    <div className="w-5 h-5 bg-lime-300 rounded"></div>
                    <div className="h-4 w-10 bg-lime-300 rounded"></div>
                </div>
            </div>

            {/* Comments Section Skeleton */}
            <div className="p-6 border-t border-lime-100">
                <div className="space-y-4">
                    {/* Comment 1 */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-lime-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 w-20 bg-lime-300 rounded"></div>
                            <div className="h-3 w-full bg-lime-300 rounded"></div>
                        </div>
                    </div>
                    {/* Comment 2 */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-lime-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 w-16 bg-lime-300 rounded"></div>
                            <div className="h-3 w-4/5 bg-lime-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}