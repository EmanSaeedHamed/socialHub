
export default function SignupLeftSide() {
  return (
    <div
      className="hidden lg:flex flex-col justify-center items-center p-12 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(132, 204, 22, 0.85), rgba(101, 163, 13, 0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo Section */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="bg-lime-500 text-zinc-900 font-bold text-3xl px-5 py-2 rounded-lg">
            T
          </span>
          <span className="text-white font-bold text-4xl tracking-wide">
            TWEETIX
          </span>
        </div>
      </div>
    </div>
  );
}