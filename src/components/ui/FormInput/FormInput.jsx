export default function FormInput({value , type , name , id , placeholder , error , touched, onChange , onBlur , errorExist , width}){
    return(
        <>
        <div>
            <label className="block text-lime-600 text-sm mb-1 font-medium">{name}</label>
            <input
               value={value}
               onChange={onChange}
               onBlur={onBlur}
               name={id}
               id={id}
              type={type}
              placeholder={placeholder}
              className="w-full bg-lime-200 backdrop-blur-sm border border-lime-600 rounded-xl px-4 py-3 text-lime-600 placeholder-gray-400 focus:outline-none focus:border-lime-400 focus:bg-white/15 transition-all"
            />
            {error && touched ? <p className="text-red-500">*{error}</p> : <p className="opacity-0">Lorem, ipsum.</p>}
            {errorExist && <p className="text-red-500">*{errorExist}</p>}
          </div>
        </>
    )
}
