
import Logo from "./assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div className="divider mt-15"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-4 mt-12 mb-8">
        <div>
          <img src={Logo} alt="" />
          <p className="mt-4 text-md">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex mt-4 gap-4 cursor-pointer">
            <a href="">GitHub</a>
            <a href="">Twitter</a>
            <a href="">Linkedin</a>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-bold text-slate-900">PRODUCT</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-bold text-slate-900">COMPANY</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-bold text-slate-900">LEGAL</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>

      <div className="max-w-6xl mx-auto flex justify-between mb-6 text-slate-500">
        <p>©2026 DevStack.All rights reserved</p>
        <div className="flex justify-around gap-4">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
