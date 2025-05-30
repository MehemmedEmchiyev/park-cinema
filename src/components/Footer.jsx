import { FaFacebook , FaInstagram ,FaYoutube , FaTelegram , FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#812d25] text-white px-6 py-10 md:px-16 text-center md:text-start">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-10 col-span-1">
            <div className='mx-auto md:mx-0 w-[150px] '>
                <img className='w-full h-full object-contain' src="https://new.parkcinema.az/images/logo.svg" alt="" />           
            </div>
          <p className="text-sm">© Park Cinema, 2025</p>
        </div>

        <div className="space-y-2">
          <ul className="text-sm space-y-1 cursor-pointer">
            <li className="font-semibold py-2">Kinoteatrlar</li>
            <li className="font-semibold py-2">Aksiyalar</li>
            <li className="font-semibold py-2">FAQ</li>
          </ul>
        </div>

        <div className="space-y-2">
        <ul className="text-sm cursor-pointer space-y-1">
            <li className="font-semibold py-2">Profil</li>
            <li className="font-semibold py-2">Əlaqə</li>
            <li className="font-semibold py-2">Hüquqi Şərtlər</li>
          </ul>
        </div>

        <div className="space-y-2 mx-auto md:mx-0">
          <h4 className="font-semibold">Bizi izləyin</h4>
          <div className="flex space-x-3 mt-4">
            
            <div className="bg-white p-2 rounded-full">
                <FaInstagram className="text-[#D52B1E] text-2xl"/>
            </div>
            <div className="bg-white p-2 rounded-full">
                <FaFacebook className="text-[#D52B1E] text-2xl"/>
            </div>
            <div className="bg-white p-2 rounded-full">
                <FaYoutube className="text-[#D52B1E] text-2xl"/>
            </div>
            <div className="bg-white p-2 rounded-full">
                <FaTelegram className="text-[#D52B1E] text-2xl"/>
            </div>
            <div className="bg-white p-2 rounded-full">
                <FaTiktok className="text-[#D52B1E] text-2xl"/>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center mx-auto md:mx-0  md:items-end space-y-4 md:space-y-0">
          <img src="https://new.parkcinema.az/icons/Visa.svg" alt="VISA" className="h-8" />
          <p className="text-sm">ESAM Innovations</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <div className="bg-gray-100 text-[#d93025] p-2 rounded-full hover:bg-gray-200 transition">
    <Icon size={20} />
  </div>
);

export default Footer;
