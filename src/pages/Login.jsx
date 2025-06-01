import { useNavigate } from "react-router"
import { loginSchema } from "../schemas/LoginSchemas"
import { useFormik } from "formik"
import { toast } from "react-toastify"

function Login() {
  const navigator = useNavigate()  
  const navigate = () => {  
    navigator('register')
  }
  const submit = () => {
    navigator('/')
    toast.success("Uğurla Daxil Olduz")  
  }
  const {values , errors , handleChange , handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password : '',
        },
        validationSchema : loginSchema,
        onSubmit : submit
    })
  return (
    <div className='px-5'>
        <h1 className='text-[32px] text-white font-semibold'>Giriş</h1>
        <div className='w-full py-20  flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='w-full md:w-max flex flex-col '>    
                <input id="email" value={values.email} onChange={handleChange} type='text' placeholder='Email' className='outline-0 p-3 mb-10 text-[#9CA3AF] text-[17px] w-full border-b-1 border-white md:w-[600px]'/>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <input id="password" value={values.password} onChange={handleChange} type='password' placeholder='Şifrə' className='outline-0 p-3 text-[#9CA3AF] text-[17px] w-full border-b-1 border-white md:w-[600px]'/>
                {errors.password && <p className="text-red-500">{errors.password}</p>}
                
                <p className='text-end font-semibold text-[#9CA3AF] py-2'>Şifrəni unutmusunuz?</p>
                <button type="submit" className='cursor-pointer flex items-center font-semibold justify-center bg-[#D52B1E] opacity-65 hover:opacity-100 duration-200 rounded-[20px]  mt-10 h-[36px] px-4 py-2  text-white text-sm hover:bg-[#A81A1A] transition w-full  max-sm:!p-0 max-sm:!text-[12px] max-sm:leading-3'>Giriş</button>
                <p className='text-center font-semibold text-[#9CA3AF] py-5'>Burada yenisiniz? <span className='underline cursor-pointer ' onClick={navigate}>Qeydiyyat</span></p>
            </form>
        </div>  
    </div>
  )
}

export default Login