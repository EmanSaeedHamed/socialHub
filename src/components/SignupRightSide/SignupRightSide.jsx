import { faArrowRightLong, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom";
import FormInput from "../ui/FormInput/FormInput";
import useSignup from "../../hooks/useSignup";
export default function SignupRightSide() {
   const {formik , errorExist , setErrorExist} = useSignup();
  return (
    <div className="bg-white flex items-center justify-center p-8 lg:p-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-lime-600 text-4xl font-extrabold mb-3">
            Get Started
          </h1>
          <p className="text-lime-500 text-base">
            Create your account and join the community
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <FormInput value={formik.values.name} type='text' name='Name' id='name' placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.name} error={formik.errors.name}/>  
          {/* Email Field */}
          <FormInput setErrorExist={setErrorExist} errorExist={errorExist} value={formik.values.email} type='email' name='Email' id='email' placeholder='Enter Your Email' onChange={(e)=>{formik.handleChange(e); setErrorExist(null)}} onBlur={formik.handleBlur} touched={formik.touched.email} error={formik.errors.email}/>  
          {/* Password Field */}
          <FormInput value={formik.values.password} type='password' name='Password' id='password' placeholder='Enter Your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.password} error={formik.errors.password}/>  
          {/* Confirm Password Field */}
          <FormInput value={formik.values.rePassword} type='password' name='Confirm Password' id='rePassword' placeholder='Enter Your Confirm Password' onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.rePassword} error={formik.errors.rePassword}/>  
          {/* Date of Birth Field */}
          <FormInput value={formik.values.dateOfBirth} type='date' name='Date of Birth' id='dateOfBirth' placeholder='Enter Your Date of Birth' onChange={formik.handleChange} onBlur={formik.handleBlur} touched={formik.touched.dateOfBirth} error={formik.errors.dateOfBirth}/>  

          {/* Gender Field */}
          <div>
            <select className="w-full bg-lime-200 backdrop-blur-sm border border-lime-600 rounded-xl px-4 py-3 text-lime-600 placeholder-white/60 focus:outline-none focus:border-lime-400 focus:bg-white/15 transition-all" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur} name="gender" id="gender">
              <option value="0">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender ? <p className="text-red-500">*{formik.errors.gender}</p> : ""}
          </div>
          {/* Sign Up Button */}
          <button
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            type="submit"
            className="flex justify-center disabled:cursor-not-allowed disabled:bg-gray-400 cursor-pointer text-lime-200 w-full hover:bg-lime-500 bg-lime-600 hover:text-white font-bold py-3.5 rounded-xl mt-6 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {
              formik.isSubmitting ?
              <div className="flex items-center gap-2">
            <span>Create Account</span> 
            <FontAwesomeIcon className="text-xl animate-spin" icon={faSpinner}  />
            </div>
            :
            <div className="flex items-center gap-2">
            <span>Create Account</span> 
            <FontAwesomeIcon className="text-xl" icon={faArrowRightLong} />
            </div>
            }
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-lime-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-lime-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
