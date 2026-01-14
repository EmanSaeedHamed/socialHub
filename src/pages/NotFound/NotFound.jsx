import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-lime-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          {/* Large 404 Text */}
          <h1 className="text-[150px] sm:text-[200px] font-extrabold text-lime-600 opacity-20 select-none">
            404
          </h1>
          
          {/* Illustration Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-lime-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <svg 
                  className="w-16 h-16 sm:w-20 sm:h-20 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lime-500 rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-lime-400 rounded-full shadow-lg animate-bounce delay-150"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-lime-600">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-lime-500 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 bg-lime-600 hover:bg-lime-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 bg-white hover:bg-lime-50 text-lime-600 font-bold py-3.5 px-8 rounded-xl border-2 border-lime-600 transition-all shadow-md hover:shadow-lg"
          >
            <span>Go Back</span>
            <svg 
              className="w-5 h-5 transform group-hover:rotate-180 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-lime-200">
          <p className="text-sm text-lime-500">
            Need help? Check out our{" "}
            <Link to="/" className="text-lime-600 font-semibold hover:underline">
              homepage
            </Link>
            {" "}or browse popular pages
          </p>
        </div>
      </div>
    </div>
  );
}
