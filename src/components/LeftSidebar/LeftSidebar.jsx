import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCompass,
  faBookmark,
  faUsers,
  faCog,
  faSignOutAlt,
  faChartLine,
  faBell,
  faEnvelope,
  faCalendarAlt,
  faVideo,
  faNewspaper,
  faQuestionCircle,
  faShieldAlt,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-zinc-900 border-r border-zinc-800 p-4 overflow-y-auto hide-scrollbar">
      {/* User Profile Section */}
      <div className="bg-gradient-to-br from-lime-500/20 to-lime-600/10 rounded-2xl p-4 mb-6 border border-lime-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="w-14 h-14 rounded-full border-2 border-lime-500 object-cover shadow-lg shadow-lime-500/20"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full"></span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold truncate">John Doe</h3>
            <p className="text-lime-500 text-sm truncate">@johndoe</p>
            <p className="text-zinc-500 text-xs mt-0.5">Full Stack Developer</p>
          </div>
        </div>
        
        {/* User Bio */}
        <p className="text-zinc-400 text-xs mt-3 leading-relaxed">
          Passionate about building amazing web experiences. React & Node.js enthusiast 🚀
        </p>
        
        {/* User Stats */}
        <div className="flex justify-around mt-4 pt-4 border-t border-lime-500/20">
          <div className="text-center group cursor-pointer">
            <span className="block text-white font-bold group-hover:text-lime-500 transition-colors">1.2k</span>
            <span className="text-xs text-zinc-400">Posts</span>
          </div>
          <div className="text-center group cursor-pointer">
            <span className="block text-white font-bold group-hover:text-lime-500 transition-colors">8.5k</span>
            <span className="text-xs text-zinc-400">Followers</span>
          </div>
          <div className="text-center group cursor-pointer">
            <span className="block text-white font-bold group-hover:text-lime-500 transition-colors">342</span>
            <span className="text-xs text-zinc-400">Following</span>
          </div>
        </div>

        {/* View Profile Button */}
        <button className="w-full mt-4 py-2 bg-lime-500/10 text-lime-500 text-sm font-medium rounded-xl hover:bg-lime-500/20 transition-all border border-lime-500/30">
          View My Profile
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all group border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <FontAwesomeIcon icon={faVideo} className="text-red-500 text-sm" />
          </div>
          <span className="text-zinc-400 text-xs group-hover:text-white transition-colors">Live</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all group border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 text-sm" />
          </div>
          <span className="text-zinc-400 text-xs group-hover:text-white transition-colors">Events</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all group border border-zinc-700/50">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
            <FontAwesomeIcon icon={faNewspaper} className="text-purple-500 text-sm" />
          </div>
          <span className="text-zinc-400 text-xs group-hover:text-white transition-colors">News</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">
          Main Menu
        </p>
        
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-lime-500/20 to-lime-600/10 text-lime-500 font-medium transition-all border-l-4 border-lime-500"
        >
          <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
          <span>Home Feed</span>
          <span className="ml-auto w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          <span>My Profile</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faCompass} className="w-5 h-5" />
          <span>Explore</span>
          <span className="ml-auto text-[10px] bg-lime-500/20 text-lime-500 px-2 py-0.5 rounded-full font-semibold">
            NEW
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faBookmark} className="w-5 h-5" />
          <span>Saved Posts</span>
          <span className="ml-auto bg-lime-500 text-zinc-900 text-xs font-bold px-2 py-0.5 rounded-full">
            12
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
          <span>Communities</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" />
          <span>Analytics</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          <span>Notifications</span>
          <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            5
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          <span>Messages</span>
          <span className="ml-auto bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            3
          </span>
        </a>
      </nav>

      {/* Divider */}
      <div className="my-6 border-t border-zinc-800"></div>

      {/* Settings Section */}
      <nav className="space-y-1">
        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">
          Preferences
        </p>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
          <span>Settings</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faPalette} className="w-5 h-5" />
          <span>Appearance</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5" />
          <span>Privacy & Security</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-zinc-800 hover:text-white hover:translate-x-1"
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5" />
          <span>Help Center</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 font-medium transition-all hover:bg-red-500/10 hover:text-red-400"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
          <span>Logout</span>
        </a>
      </nav>

      {/* Premium Card */}
      <div className="mt-6 bg-gradient-to-br from-lime-500 via-lime-500 to-lime-600 rounded-2xl p-4 text-zinc-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">👑</span>
            <h4 className="font-bold text-lg">Go Premium!</h4>
          </div>
          <p className="text-sm mb-3 opacity-80">
            Unlock exclusive features, verified badge, and boost your profile visibility.
          </p>
          <ul className="text-xs space-y-1 mb-4 opacity-90">
            <li className="flex items-center gap-2">
              <span>✓</span> Ad-free experience
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span> Priority support
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span> Advanced analytics
            </li>
          </ul>
          <button className="w-full bg-zinc-900 text-lime-500 font-semibold py-2.5 rounded-xl hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Upgrade Now - $9.99/mo
          </button>
        </div>
      </div>
    </aside>
  );
}
