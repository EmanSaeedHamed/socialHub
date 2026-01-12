import { Bounce, ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthRoute from "./components/AuthRoute/AuthRoute";

const App = () => {
	const router = createBrowserRouter([
		{path: "/" , element:<Layout/> , children:[
      {index:true , element:<ProtectedRoute> <Home/> </ProtectedRoute>},
      // {path:"/signup" , element:<AuthRoute><Signup/></AuthRoute>},
      // {path:"/login" , element:<AuthRoute><Login/></AuthRoute>},
      {path:"*" , element:<NotFound/>}
    ]},
    {path:"/signup" , element:<AuthRoute><Signup/></AuthRoute>},
      {path:"/login" , element:<AuthRoute><Login/></AuthRoute>},
		
	])
  return (
    <>
	 <AuthProvider>
     <RouterProvider router={router}/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
   </AuthProvider>
    </>
  );
};

export default App;
