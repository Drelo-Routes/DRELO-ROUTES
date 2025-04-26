import { FaEnvelope, FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-yellow-400 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Company Info */}
        <div className="space-y-3">
  <h3 className="text-2xl font-bold text-white">Drelo Routes</h3>
  
  <a
    href="mailto:dreloroutes@gmail.com"
    className="inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-green-100 transition"
  >
    <FaEnvelope />
    Email Us
  </a>

  <p className="text-1xl text-white mt-2">
    Accra, Ghana
  </p>
</div>



        {/* Center - Just leave blank or slogan */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm italic">"Travel smart, travel safe."</p>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col items-end">
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-green-600 transition">
              <FaInstagram />
            </a>
            <a href="https://drelo-routes.netlify.app/" className="p-2 border border-white rounded-full hover:bg-white hover:text-green-600 transition">
              <FaGlobe />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white mt-6 pt-4 text-center text-xs">
        Drelo Routes © 2025, Made with love , Developed by Gloria & Andrew
      </div>
    </footer>
  );
};

export default Footer;
