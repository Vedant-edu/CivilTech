import { Facebook, Twitter, Instagram, Linkedin, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-white pt-20 pb-10 lg:rounded-t-[80px] rounded-t-[30px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="w-8 h-8 text-black" />
              <span className="text-2xl font-bold text-black">Civil Tech</span>
            </div>
            <p className="text-black mb-6">
              Leading manufacturer of quality cover blocks for the construction industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#2B6CB0] transition-colors">
                <Facebook className="text-black" />
              </a>
              <a href="#" className="hover:text-[#2B6CB0] transition-colors">
                <Twitter className="text-black" />
              </a>
              <a href="#" className="hover:text-[#2B6CB0] transition-colors">
                <Instagram className="text-black" />
              </a>
              <a href="#" className="hover:text-[#2B6CB0] transition-colors">
                <Linkedin className="text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-black hover:text-[#2B6CB0] transition-colors">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Home</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">About Us</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Products</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-black hover:text-[#2B6CB0] transition-colors">Other Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Standard Cover Blocks</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-black hover:text-[#2B6CB0] transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-black hover:text-[#2B6CB0] transition-colors">Contact Info</h3>
            <ul className="space-y-4 text-black">
              Plot No: 3, <br /> Vishwakarma Industrial Estate, <br /> Kudsad Road, <br />
              Kim, Surat, Gujarat. <br />
              Pincode: 394111
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-black">
          <p>&copy; {new Date().getFullYear()} Civil Tech. All rights reserved. | Developed By Vedant</p>
        </div>
      </div>
    </footer>
  );
}