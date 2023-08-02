import { useEffect, useState } from 'react';
import {FaLaptopCode} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState("");

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        setIsChecked(!isChecked);
    };

    return ( 
        <div className={``} id='about'>
            <div className="fixed top-0 z-30 flex items-center justify-between w-full h-16 py-2 shadow-lg shadow-[rgba(0,0,0,.1)] transition-all ease-in-out duration-500 dark:bg-color-one dark:text-color-four bg-color-four text-color-one dark:shadow-[rgba(255,255,255,0.04)]">
                <div className="relative z-30 flex items-center gap-4 ml-5 cursor-pointer">
                    <FaLaptopCode className='scale-[1.7] hover:scale-[1.8] drop-shadow-md'/>
                    <h1 className="text-2xl font-bold drop-shadow-md"><a href="/">Ikhwan Dev</a></h1>
                </div>
                <div className="mr-2 scale-[.8] lg:hidden hover:text-color-two relative z-30">
                    <label className="scale-125 bg-transparent border-none dark:text-color-four btn btn-circle swap swap-rotate text-color-one">  
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggleMenu} checked={isChecked}/>
                        {/* hamburger icon */}
                        <svg className={`fill-current swap-off`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        {/* close icon */}
                        <svg className="fill-current swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                </div>
            </div>
            <div className={`fixed w-full pt-5 pb-8 leading-9 text-center bg-color-four shadow-md ${isOpen?'top-16':'-top-64'} text-color-one transition-all ease-in-out duration-500 z-10 dark:bg-color-one dark:text-color-four`}>
                <ul>
                    <li><a href="#about" className='text-xl font-bold hover:text-color-two' onClick={handleToggleMenu}>About</a></li>
                    <li><a href="#skills" className='text-xl font-bold hover:text-color-two' onClick={handleToggleMenu}>Skills</a></li>
                    <li><a href="#portofolio" className='text-xl font-bold hover:text-color-two' onClick={handleToggleMenu}>Portofolio</a></li>
                    <li><a href="#contact" className='text-xl font-bold hover:text-color-two' onClick={handleToggleMenu}>Contact</a></li>
                    <button className='px-5 py-2 mt-2 text-lg font-bold rounded-full bg-color-tree text-color-four'>Hire me</button>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;