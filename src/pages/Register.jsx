import { useState } from "react";
import AzePhoneInput from "../components/Buyticket/PhoneInput";
import { useFormik } from "formik";
import { registerSchemas } from "../schemas/RegisterSchemas";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [gender, setGender] = useState("Kişi");
  const navigator = useNavigate()
  const submit = () => {
    navigator('/auth')
    toast.success("Qeydiyyat uğurla başa çatdı")
    toast.success("Daxil Ola Bilərsiz")
  }
  const {values , errors , handleChange , handleSubmit} = useFormik({
    initialValues: {
        name : "",
        surname : "",
        email: '',
        tel : '',
        date : '',
        password : '',
        resetpassword : ''
    },
    validationSchema : registerSchemas,
    onSubmit : submit
  })
  return (
    <>
     <h1 className='text-[32px] text-white font-semibold'>Qeydiyyat</h1>
    <div className="  text-white flex justify-center items-center px-4">

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl p-6 md:p-10 ">
        <div>
          <input value={values.name} onChange={handleChange} id="name" type="text" placeholder="Ad" className="w-full bg-transparent border-b border-white outline-none py-2 " />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input value={values.surname} onChange={handleChange} id="surname" placeholder="Soyad" type="text" className="w-full bg-transparent border-b border-white outline-none py-2 " />
          {errors.surname && <p className="text-red-500">{errors.surname}</p>}
        </div>
        <div>
            <div>
                <label className="block mb-1 text-sm">Telefon</label>
                <div className="flex items-center gap-2">
                    <span className="text-white font-bold">+994</span>
                    <input value={values.tel} onChange={handleChange} id="tel" type="text" className="w-full bg-transparent border-b border-white outline-none py-2" placeholder="51 511 11 11" />
            </div>
                    {errors.tel && <p className="text-red-500">{errors.tel}</p>}
        </div>
        </div>
        <div>
          <input value={values.email} onChange={handleChange} id="email" placeholder="Elektron poçt" type="email" className="w-full bg-transparent border-b border-white outline-none py-2" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          
        </div>
        <div>
          <input type="date" value={values.date} onChange={handleChange} id="date" className="w-full bg-transparent border-b border-white outline-none py-2" placeholder="gg.aa.yyyy" />
          {errors.date && <p className="text-red-500">{errors.date}</p>}

        </div>

        <div className="relative">
          <input
            value={values.password} onChange={handleChange} id="password"
            placeholder="Şifrə"
            type={showPassword ? "text" : "password"}
            className="w-full bg-transparent border-b border-white outline-none py-2 pr-8"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="Kişi"
              checked={gender === "Kişi"}
              onChange={() => setGender("Kişi")}
              className="accent-red-600"
            />
            Kişi
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="Qadın"
              checked={gender === "Qadın"}
              onChange={() => setGender("Qadın")}
              className="accent-red-600"
            />
            Qadın
          </label>
        </div>
        <div className="relative">
          <input
            value={values.resetpassword} onChange={handleChange} id="resetpassword"
            placeholder="Şifrəni Təsdiqlə"
            type={showConfirm ? "text" : "password"}
            className="w-full bg-transparent border-b border-white outline-none py-2 pr-8"
          />
          {errors.resetpassword && <p className="text-red-500">{errors.resetpassword}</p>}

        </div>
        <div>

        </div>
        <div className="col-span-1 flex items-center justify-end w-full mt-4">
          <button type="submit" className="w-full bg-red-800 hover:bg-red-700 transition-colors py-3 rounded-full text-white font-semibold">
            Qeydiyyat
          </button>
        </div>
      </form>
    </div>
  </>
  );
}
