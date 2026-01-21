import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserPlus, 
  faFire, 
  faHashtag, 
  faArrowUp,
  faGem,
  faCrown,
  faCheckCircle,
  faHeart,
  faComment,
  faShare,
  faBolt,
  faGlobe,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block fixed right-0 top-16 bottom-0 w-80 bg-zinc-900 border-l border-zinc-800 p-4 overflow-y-auto hide-scrollbar">
      
      {/* Stories / Highlights Section */}
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />
          Stories
        </h3>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {/* Add Story */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center border-2 border-dashed border-zinc-600 group-hover:border-lime-500 transition-colors">
              <span className="text-2xl text-zinc-400 group-hover:text-lime-500 transition-colors">+</span>
            </div>
            <span className="text-xs text-zinc-500">Add</span>
          </div>
          {/* Story 1 */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-lime-400 via-lime-500 to-green-500">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="Story"
                className="w-full h-full rounded-full object-cover border-2 border-zinc-900"
              />
            </div>
            <span className="text-xs text-zinc-400">Anna</span>
          </div>
          {/* Story 2 */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-lime-400 via-lime-500 to-green-500">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="Story"
                className="w-full h-full rounded-full object-cover border-2 border-zinc-900"
              />
            </div>
            <span className="text-xs text-zinc-400">Mark</span>
          </div>
          {/* Story 3 */}
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-lime-400 via-lime-500 to-green-500">
              <img
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="Story"
                className="w-full h-full rounded-full object-cover border-2 border-zinc-900"
              />
            </div>
            <span className="text-xs text-zinc-400">Emily</span>
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-zinc-800/50 rounded-2xl p-4 mb-6 border border-zinc-700/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFire} className="text-orange-500" />
            <h3 className="text-white font-semibold">Trending Now</h3>
          </div>
          <FontAwesomeIcon icon={faGlobe} className="text-zinc-500 text-sm" />
        </div>
        
        <div className="space-y-3">
          <div className="group cursor-pointer p-2 rounded-lg hover:bg-zinc-700/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHashtag} className="text-lime-500 text-sm" />
                <span className="text-white font-medium group-hover:text-lime-500 transition-colors">
                  WebDevelopment
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
                <span>12%</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-0.5 ml-5">12.5k posts • Technology</p>
          </div>

          <div className="group cursor-pointer p-2 rounded-lg hover:bg-zinc-700/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHashtag} className="text-lime-500 text-sm" />
                <span className="text-white font-medium group-hover:text-lime-500 transition-colors">
                  ReactJS
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
                <span>8%</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-0.5 ml-5">8.3k posts • Programming</p>
          </div>

          <div className="group cursor-pointer p-2 rounded-lg hover:bg-zinc-700/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHashtag} className="text-lime-500 text-sm" />
                <span className="text-white font-medium group-hover:text-lime-500 transition-colors">
                  TailwindCSS
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
                <span>25%</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-0.5 ml-5">5.7k posts • Design</p>
          </div>

          <div className="group cursor-pointer p-2 rounded-lg hover:bg-zinc-700/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHashtag} className="text-lime-500 text-sm" />
                <span className="text-white font-medium group-hover:text-lime-500 transition-colors">
                  JavaScript
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
                <span>5%</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-0.5 ml-5">15.2k posts • Programming</p>
          </div>

          <div className="group cursor-pointer p-2 rounded-lg hover:bg-zinc-700/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHashtag} className="text-lime-500 text-sm" />
                <span className="text-white font-medium group-hover:text-lime-500 transition-colors">
                  AITools
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-xs">
                <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
                <span>45%</span>
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-0.5 ml-5">9.8k posts • Technology</p>
          </div>
        </div>

        <button className="mt-4 text-lime-500 text-sm font-medium hover:text-lime-400 transition-colors flex items-center gap-1">
          Show more
          <span className="text-xs">→</span>
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-zinc-800/50 rounded-2xl p-4 mb-6 border border-zinc-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faUserPlus} className="text-lime-500" />
          <h3 className="text-white font-semibold">Who to Follow</h3>
        </div>

        <div className="space-y-4">
          {/* User 1 - Verified */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-11 h-11 rounded-full border-2 border-lime-500/30 object-cover group-hover:border-lime-500 transition-colors"
                />
                <FontAwesomeIcon icon={faCheckCircle} className="absolute -bottom-0.5 -right-0.5 text-blue-500 text-xs bg-zinc-900 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="text-white font-medium text-sm">Sarah Miller</h4>
                </div>
                <p className="text-zinc-500 text-xs">@sarahmiller • UX Designer</p>
                <p className="text-zinc-600 text-xs mt-0.5">Followed by @alex and 3 others</p>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold text-xs px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95">
              Follow
            </button>
          </div>

          {/* User 2 - Premium */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="User"
                  className="w-11 h-11 rounded-full border-2 border-lime-500/30 object-cover group-hover:border-lime-500 transition-colors"
                />
                <FontAwesomeIcon icon={faCrown} className="absolute -bottom-0.5 -right-0.5 text-yellow-500 text-xs bg-zinc-900 rounded-full p-0.5" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="text-white font-medium text-sm">Mike Johnson</h4>
                  <FontAwesomeIcon icon={faGem} className="text-purple-400 text-[10px]" />
                </div>
                <p className="text-zinc-500 text-xs">@mikej • Tech Lead</p>
                <p className="text-zinc-600 text-xs mt-0.5">25.3k followers</p>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold text-xs px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95">
              Follow
            </button>
          </div>

          {/* User 3 */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User"
                className="w-11 h-11 rounded-full border-2 border-lime-500/30 object-cover group-hover:border-lime-500 transition-colors"
              />
              <div>
                <h4 className="text-white font-medium text-sm">Emma Wilson</h4>
                <p className="text-zinc-500 text-xs">@emmaw • Product Designer</p>
                <p className="text-zinc-600 text-xs mt-0.5">Works at Google</p>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold text-xs px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95">
              Follow
            </button>
          </div>

          {/* User 4 */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="User"
                className="w-11 h-11 rounded-full border-2 border-lime-500/30 object-cover group-hover:border-lime-500 transition-colors"
              />
              <div>
                <h4 className="text-white font-medium text-sm">Alex Turner</h4>
                <p className="text-zinc-500 text-xs">@alexturner • Developer</p>
                <p className="text-zinc-600 text-xs mt-0.5">Interested in Open Source</p>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-semibold text-xs px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95">
              Follow
            </button>
          </div>
        </div>

        <button className="mt-4 text-lime-500 text-sm font-medium hover:text-lime-400 transition-colors flex items-center gap-1">
          See all suggestions
          <span className="text-xs">→</span>
        </button>
      </div>

      {/* Top Creators This Week */}
      <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/50 rounded-2xl p-4 mb-6 border border-zinc-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faMedal} className="text-yellow-500" />
          <h3 className="text-white font-semibold">Top Creators</h3>
          <span className="text-xs text-zinc-500 ml-auto">This Week</span>
        </div>

        <div className="space-y-3">
          {/* Creator 1 */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
            <span className="text-yellow-500 font-bold text-lg w-6">1</span>
            <img
              src="https://randomuser.me/api/portraits/women/89.jpg"
              alt="Creator"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate">Jessica Park</h4>
              <p className="text-zinc-500 text-xs">142 posts • 5.2k likes</p>
            </div>
          </div>

          {/* Creator 2 */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-zinc-400/10 to-transparent border border-zinc-500/20">
            <span className="text-zinc-400 font-bold text-lg w-6">2</span>
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt="Creator"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate">David Chen</h4>
              <p className="text-zinc-500 text-xs">98 posts • 4.1k likes</p>
            </div>
          </div>

          {/* Creator 3 */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-orange-700/10 to-transparent border border-orange-700/20">
            <span className="text-orange-600 font-bold text-lg w-6">3</span>
            <img
              src="https://randomuser.me/api/portraits/women/54.jpg"
              alt="Creator"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate">Maria Garcia</h4>
              <p className="text-zinc-500 text-xs">87 posts • 3.8k likes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Friends */}
      <div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50 backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Active Friends
          <span className="text-xs text-zinc-500 ml-auto">12 online</span>
        </h3>

        <div className="space-y-2">
          {/* Friend 1 */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-700/30 transition-colors cursor-pointer group">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate group-hover:text-lime-500 transition-colors">Lisa Anderson</h4>
              <p className="text-zinc-500 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Typing...
              </p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-500 hover:text-lime-400">
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>

          {/* Friend 2 */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-700/30 transition-colors cursor-pointer group">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate group-hover:text-lime-500 transition-colors">Chris Davis</h4>
              <p className="text-zinc-500 text-xs">Active now</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-500 hover:text-lime-400">
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>

          {/* Friend 3 */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-700/30 transition-colors cursor-pointer group">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/42.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-zinc-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate group-hover:text-lime-500 transition-colors">Nina Roberts</h4>
              <p className="text-zinc-500 text-xs">Away • 15m</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-500 hover:text-lime-400">
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>

          {/* Friend 4 */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-700/30 transition-colors cursor-pointer group">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate group-hover:text-lime-500 transition-colors">James Wilson</h4>
              <p className="text-zinc-500 text-xs">Active now</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-500 hover:text-lime-400">
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>

          {/* Friend 5 */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-700/30 transition-colors cursor-pointer group">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt="Friend"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm font-medium truncate group-hover:text-lime-500 transition-colors">Sophie Martin</h4>
              <p className="text-zinc-500 text-xs">Active now</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-lime-500 hover:text-lime-400">
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>
        </div>

        <button className="mt-3 w-full py-2 text-zinc-400 text-sm font-medium hover:text-white transition-colors bg-zinc-700/30 rounded-xl hover:bg-zinc-700/50">
          View All Friends
        </button>
      </div>

      {/* Footer Links */}
      <div className="mt-6 px-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600">
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Cookies</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Accessibility</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Ads</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">About</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Careers</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Developers</a>
        </div>
        <p className="text-xs text-zinc-700 mt-2">© 2026 Tweetix. All rights reserved.</p>
      </div>
    </aside>
  );
}
