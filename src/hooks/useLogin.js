import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { AuthContext } from "../context/AuthContext";

export default function useLogin(){
  const {setToken} = useContext(AuthContext)
  const [errorLogin , setErrorLogin] = useState(null);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const signupRegex = yup.object({
    email: yup
    .string()
    .required("email is required")
    .email("email is invalid"),
    password: yup
    .string()
    .required("password is required")
    .matches(passwordRegex,"password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  })
   async function handleSubmit(values){
    try {
      const options = {
      url: 'https://linked-posts.routemisr.com/users/signin',
      method: 'POST',
      data: values,
    };
      let {data} = await axios.request(options);
    if(data.message == 'success'){
      setToken(data.token);
      localStorage.setItem('token',data.token)
      toast.success("Login successfully");
      setTimeout(()=>{
        navigate('/')
      },5000);
    }
    } catch (error) {
      toast.error(error.response.data.error);
      setErrorLogin(error.response.data.error);
      
    }
    
  }
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },

    validationSchema: signupRegex,

    onSubmit: handleSubmit,
    
  })

  console.log(formik);

  return {
    formik,
    errorLogin,
    setErrorLogin,
      }
}