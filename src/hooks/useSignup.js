import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";

export default function useSignup(){
  const [errorExist , setErrorExist] = useState(null);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const signupRegex = yup.object({
    name: yup
    .string()
    .required("name is required")
    .min(3,"name must be at least 3 characters")
    .max(20,"name must be at most 20 characters"),
    email: yup
    .string()
    .required("email is required")
    .email("email is invalid"),
    
    password: yup
    .string()
    .required("password is required")
    .matches(passwordRegex,"password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    
    rePassword: yup
    .string()
    .required("rePassword is required")
    .oneOf([yup.ref("password")],"passwords must match"),
    
    dateOfBirth: yup
    .string()
    .required("dateOfBirth is required"),
    
    gender: yup
    .string()
    .required("gender is required")
    .oneOf(['male','female'],"gender must be male or female"),
  })
   async function handleSubmit(values){
    try {
      const options = {
      url: 'https://linked-posts.routemisr.com/users/signup',
      method: 'POST',
      data: values,
    };
      let {data} = await axios.request(options);
    if(data.message == 'success'){
      toast.success("Account created successfully");
      setTimeout(()=>{
        navigate('/login')
      },5000);
    }
    } catch (error) {
      setErrorExist(error.response.data.error);
      
    }
    
  }
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",  
      dateOfBirth:"",
      gender:"",
    },

    validationSchema: signupRegex,

    onSubmit: handleSubmit,
    
  })

  console.log(formik);

  return {
    formik,
    errorExist,
    setErrorExist
  }
}