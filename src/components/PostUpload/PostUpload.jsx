import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user from '../../assets/user.png'
import { faImage, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function PostUpload({getAllPosts}) {
  const {token} = useContext(AuthContext);
  const [preview , setPreview] = useState(null);
  const validationSchema = yup.object({
    body: yup
    .string()
    .required("caption is required")
    .min(3,"caption can not be less than 3 characters")
    .max(50,"caption can not be more than 50 characters"),

    image: yup
    .mixed()
    .nullable()
    .test('fileSize','file is too large(max:5MB)',
      (file)=>{
        if(!file) return true;
        return file.size <= 5*1024*1024;
      })
    .test("fileType","only image files are allowed",
      (file)=>{
        if(!file) return true;
        const supportedTypes = ['image/gif','image/jpeg','image/png','image/apng'];
        return supportedTypes.includes(file.type);
      }
    )
  })
  async function handleSubmit(values){
      try {
            const formData = new FormData();
            formData.append('body',values.body);
            if(values.image) {
              formData.append('image',values.image);
            }
            const options = {
            url:'https://linked-posts.routemisr.com/posts',
            method:'POST',
            headers:{
                token
            },
            data:formData
        };
        const {data} = await axios.request(options);
        console.log(data);
        if(data.message == 'success'){
          toast.success("post created successfully");
          formik.resetForm();
          setPreview(null);
          getAllPosts();
          
        }
        
        } catch (error) {
            console.log(error);
            toast.error("failed to create a post");
            
        }
     
  }
  const formik = useFormik({
    initialValues:{
      body:"",
      image:null,
    },
    validationSchema:validationSchema,
    onSubmit:handleSubmit,
  })
  return (
    <>
      <section>
        <div className="container max-w-2xl mx-auto bg-lime-200 rounded-xl p-6">
          <figure className='flex gap-3'>
            <img className='size-12 rounded-full border-2 border-lime-500' src={user} alt="" />
           <figcaption>
            <h2 className='text-xl text-lime-600 font-bold'>
                Create a Post
            </h2>
            <p className='text-sm text-gray-500'>
                Share your thoughts with the world.
            </p>
           </figcaption>
          </figure>
          <form className='mt-4' onSubmit={formik.handleSubmit}>
            <textarea className='w-full rounded-lg border-3 border-white p-3 text-sm
         focus:border-lime-500 focus:ring-2 focus:ring-lime-200 resize-none
         outline-none transition' name="body" id="body" placeholder="What's on your mind ?"
         value={formik.values.body}
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         >
         </textarea>
         {
          formik.errors.body && formik.touched.body ? <p className='text-red-600'>*{formik.errors.body}</p>: ""
         }
          {
            preview? <div className='relative'>
          <img className='w-full rounded-2xl object-cover aspect-video'
           src={preview} alt="" />
           <button onClick={()=>{
                  setPreview(null);
                  formik.setFieldValue('image',null);
             
           }} type='button' className='cursor-pointer flex justify-center items-center bg-red-500 text-white rounded-full p-1 absolute top-2 right-2 hover:bg-red-600 transition-colors duration-100'>
            <FontAwesomeIcon icon={faXmark} />
           </button>
         </div> : ""
          }
            <div className='flex justify-between mt-3'>
                <div>
                  <button type='button' className='border-2 border-white rounded-lg p-1 group hover:border-lime-400 hover:scale-105 transition-all duration-200 cursor-pointer'>
                  <label htmlFor="image" className='text-lime-600 cursor-pointer'>
                    <FontAwesomeIcon icon={faImage}/>
                    <span>Upload a Photo</span>
                </label>
                </button>
                {
          formik.errors.image && formik.touched.image ? <p className='text-red-600'>*{formik.errors.image}</p>: ""
         }
                </div>
                <input type="file" name="image" id='image' className='hidden'
                 onChange={(e)=>{
                  const file = e.target.files[0];
                  formik.setFieldValue('image',file);
                  const url = URL.createObjectURL(file);
                  setPreview(url);
                 }}
                 onBlur={formik.handleBlur}
                />
                <button disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} type='submit'
                className='bg-lime-500 rounded-xl px-3 flex justify-center items-center cursor-pointer text-white hover:bg-lime-400 transition-all duration-200 disabled:cursor-not-allowed'>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Post</span>
                </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
