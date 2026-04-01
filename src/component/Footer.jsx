import instaImg from '../assets/Instagram.png';
import fbImg from '../assets/Facebook.png';
import ttImg from '../assets/Twitter.png';


const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      {/* <div className="max-w-7xl mx-auto px-6"> */}
      <div className="max-w-6xl mx-auto w-full pt-10">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators,  
            </p>
            <p className="text-zinc-400 text-lg max-w-md">professionals, and businesses. Work smarter</p>
            <p className="text-zinc-400 text-lg max-w-md">with our suite of powerful tools.</p>

            {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                        </div> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <ul className="space-y-4 text-zinc-400 flex gap-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={instaImg} alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={fbImg} alt="" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={ttImg} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} © 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;