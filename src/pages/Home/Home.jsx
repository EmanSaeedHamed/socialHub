import Feed from "../../components/Feed/Feed";
import PostUpload from "../../components/PostUpload/PostUpload";
import usePosts from "../../hooks/usePosts";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

export default function Home() {
  const{posts , getAllPosts} = usePosts()
  return (
    <>
      {/* Left Sidebar */}
      <LeftSidebar />
      
      {/* Main Content */}
      <div className="mt-20 lg:ml-64 lg:mr-80 px-6">
        <PostUpload getAllPosts={getAllPosts}/>
        <Feed posts={posts} getAllPosts={getAllPosts}/>
      </div>
      
      {/* Right Sidebar */}
      <RightSidebar />
    </>
  )
}
