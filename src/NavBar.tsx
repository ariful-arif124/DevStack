// import React from 'react';
import Logo from './assets/logo-text.png'

const NavBar = () => {


    return (
        <>
        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white">

        <div className="max-w-6xl mx-auto flex justify-between items-center pt-3 ">
            <img src={Logo} alt="" />
           
                <ul className="flex gap-4 items-center">
                    <li className="text-[#d91b7e]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className="flex items-center gap-5">
                 <button>Sign in</button> 
                <button className="rounded-full px-6 p-1 border border-[#d91b7e] bg-[#d91b7e] text-white">Sign Up</button> 
            </div>
        </div>
        </nav>
        </>
    );
};

export default NavBar;

