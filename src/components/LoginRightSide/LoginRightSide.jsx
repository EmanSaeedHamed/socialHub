import { faArrowRightLong, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom";
import FormInput from "../ui/FormInput/FormInput";
import useLogin from "../../hooks/useLogin";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function LoginRightSide() {
 const {token} = useContext(AuthContext);
 console.log(token);
   const {formik , errorLogin , setErrorLogin} = useLogin();
  return (
    <div className="bg-white flex items-center justify-center p-8 lg:p-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-lime-600 text-4xl font-extrabold mb-3">
            Login
          </h1>
          <p className="text-lime-500 text-base">
            Login to your account and join the community
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>  
          {/* Email Field */}
          <FormInput value={formik.values.email} type='email' name='Email' id='email' placeholder='Enter Your Email' onChange={(e)=>{formik.handleChange(e); setErrorLogin(null)}} onBlur={formik.handleBlur} touched={formik.touched.email} error={formik.errors.email}/>  
          {/* Password Field */}
          <FormInput value={formik.values.password} type='password' name='Password' id='password' placeholder='Enter Your Password' onChange={(e)=>{formik.handleChange(e); setErrorLogin(null)}} onBlur={formik.handleBlur} touched={formik.touched.password} error={formik.errors.password}/>  
          {/* Login Button */}
          <button
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            type="submit"
            className="flex justify-center disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer text-lime-200 w-full hover:bg-lime-500 bg-lime-600 hover:text-white font-bold py-3.5 rounded-xl mt-6 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {
              formik.isSubmitting ?
              <div className="flex items-center gap-2">
            <span>Login</span> 
            <FontAwesomeIcon className="text-xl animate-spin" icon={faSpinner}  />
            </div>
            :
            <div className="flex items-center gap-2">
            <span>Login</span> 
            <FontAwesomeIcon className="text-xl" icon={faArrowRightLong} />
            </div>
            }
          </button>
          {errorLogin && <p className="text-red-500">*{errorLogin}</p>}
        </form>

        {/* Sign In Link */}
        <p className="text-center text-lime-500 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-lime-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
