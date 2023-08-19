import { useState } from 'react';
import {FaLaptopCode} from 'react-icons/fa';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState("");
    const [activeLink, setActiveLink] = useState(1);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        setIsChecked(!isChecked);
    };

    const handleActiveLink = (num) => {
        setIsOpen(!isOpen);
        setIsChecked(!isChecked);
        setActiveLink(num);
    };

    const handleSetActive = (data) => {
        data == 'about' && setActiveLink(1);
        data == 'skills' && setActiveLink(2);
        data == 'portofolio' && setActiveLink(3);
        data == 'contact' && setActiveLink(4);
    }

    return ( 
        <div className={``} id='about'>
            <div className="fixed top-0 z-30 flex items-center justify-between w-full h-16 py-2 shadow-lg shadow-[rgba(0,0,0,.1)] transition-all ease-in-out duration-500 dark:bg-color-one dark:text-color-four bg-color-four text-color-one dark:shadow-[rgba(255,255,255,0.04)] lg:px-20">
                <div className="relative z-30 flex items-center gap-4 ml-5 cursor-pointer">
                    <FaLaptopCode className='scale-[1.7] hover:scale-[1.8] drop-shadow-md'/>
                    <h1 className="text-2xl font-bold drop-shadow-md"><a href="/">Ikhwan Dev</a></h1>
                </div>
                <div className="mr-2 scale-[.8] lg:hidden hover:text-color-two relative z-30">
                    <label className="scale-125 bg-transparent border-none dark:text-color-four dark:hover:bg-color-two btn btn-circle swap swap-rotate text-color-one">  
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggleMenu} checked={isChecked}/>
                        {/* hamburger icon */}
                        <svg className={`fill-current swap-off`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        {/* close icon */}
                        <svg className="fill-current swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
                </div>
            </div>
            <div className={`fixed w-full pt-5 pb-8 leading-9 text-center bg-color-four shadow-md ${isOpen?'top-16':'-top-64'} lg:-top-2 lg:shadow-none lg:z-30 lg:left-96 lg:ml-44 lg:pb-0 text-color-one transition-all ease-in-out duration-500 z-10 dark:bg-color-one dark:text-color-four`}>
                <ul className='lg:flex lg:gap-10 lg:items-center'>
                    <li className='text-xl font-bold cursor-pointer dark:hover:text-gray-400 hover:text-gray-500'>
                        <Link activeClass="active" smooth spy={true} to="about" duration={0} onClick={() => handleActiveLink(1)} onSetActive={handleSetActive}>
                            About
                        </Link>
                    </li>
                    <li className='text-xl font-bold cursor-pointer dark:hover:text-gray-400 hover:text-gray-500'>
                        <Link activeClass="active" smooth spy={true} to="skills" duration={0} onClick={() => handleActiveLink(2)} onSetActive={handleSetActive}>
                            Skills
                        </Link>
                    </li>
                    <li className='text-xl font-bold cursor-pointer dark:hover:text-gray-400 hover:text-gray-500'>
                        <Link activeClass="active" smooth spy={true} to="portofolio" duration={0} onClick={() => handleActiveLink(3)} onSetActive={handleSetActive}>
                            Portofolio
                        </Link>
                    </li>
                    <li className='text-xl font-bold cursor-pointer dark:hover:text-gray-400 hover:text-gray-500'>
                        <Link activeClass="active" smooth spy={true} to="contact" duration={0} onClick={() => handleActiveLink(4)} onSetActive={handleSetActive}>
                            Contact
                        </Link>
                    </li>
                    {/* <li><a data-to-scrollspy-id="about" href="#about" className='text-xl font-bold dark:hover:text-gray-400 hover:text-gray-500' onClick={() => handleActiveLink(1)}>About</a></li>
                    <li><a data-to-scrollspy-id="skills" href="#skills" className='text-xl font-bold dark:hover:text-gray-400 hover:text-gray-500' onClick={() => handleActiveLink(2)}>Skills</a></li>
                    <li><a data-to-scrollspy-id="portofolio" href="#portofolio" className='text-xl font-bold dark:hover:text-gray-400 hover:text-gray-500' onClick={() => handleActiveLink(3)}>Portofolio</a></li>
                    <li><a data-to-scrollspy-id="contact" href="#contact" className='text-xl font-bold dark:hover:text-gray-400 hover:text-gray-500' onClick={() => handleActiveLink(4)}>Contact</a></li> */}
                    <button className='px-5 py-2 mt-2 text-lg font-bold rounded-full lg:mt-0 bg-color-tree text-color-four hover:bg-[#308a8e]'>Hire me</button>
                </ul>
                <div className={`hidden lg:block h-1 -mt-2 dark:bg-color-four bg-color-one transition-all duration-500 ease-in-out ${activeLink === 1 && 'w-[60px]'} ${activeLink === 2 && 'translate-x-[100px] w-[46px]'} ${activeLink === 3 && 'w-[95px] translate-x-[188px]'} ${activeLink === 4 && 'w-[72px] translate-x-[323px]'}`} id='activeLink'></div>
            </div>
        </div>
     );
}
 
export default Navbar;