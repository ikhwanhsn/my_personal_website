import {TbBrandTelegram, TbBrandYoutube, TbBrandLinkedin, TbBrandTiktok, TbBrandGithub, TbHeartFilled} from "react-icons/tb"
import MedsosIcon from "../components/MedsosIcon";
import {AiOutlineMail} from 'react-icons/ai'
import coffe from '../../public/img/coffe.png'
import Swal from 'sweetalert2'
import {useState} from 'react'

const Contact = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = (e) => {
        if(inputEmail == '' || inputMessage == ''){
            e.preventDefault();
            Swal.fire(
                "Error Message!",
                'Please Input Your Email & Message',
                'error'
                )
                return;
            }
            
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail)){
            e.preventDefault();
            Swal.fire(
                "Error Message!",
                'Your Email is Wrong!!!',
                'error'
            )
            return;
        }
        e.preventDefault();
        Swal.fire(
            'Good job!',
            'Send Message Successfully!',
            'success'
        )
        setInputEmail('')
        setInputMessage('')
    }

    return ( 
        <div className="pt-24 pb-5 text-center transition-all duration-500 ease-in-out lg:relative lg:pt-8 text-color-one px-7 lg:px-24 dark:bg-color-one dark:text-color-four lg:clear-both" id="contact">
            <div className="relative lg:w-1/2">
                <h1 className="text-4xl font-bold drop-shadow-lg lg:hidden">My Contact</h1>
                <h2 className='text-3xl font-bold text-left mt-14'>Have Coffe with Me?</h2>
                <h2 className='mt-1 text-lg font-bold text-left'>Let's create something new and powerful</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="Email..."  className="w-full h-full p-3 mt-3 border-2 rounded-md shadow-sm transition-all duration-500 ease-in-out placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)] dark:bg-color-one dark:border-color-four dark:text-color-four dark:placeholder:text-color-four" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
                    <textarea name="" id="" className="w-full h-40 p-3 mt-3 border-2 rounded-md shadow-sm transition-all duration-500 ease-in-out placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)] dark:bg-color-one dark:border-color-four dark:text-color-four dark:placeholder:text-color-four" placeholder="Your message..." onChange={(e) => setInputMessage(e.target.value)} value={inputMessage}></textarea>
                    <div className="flex w-full gap-2 mt-1">
                        <button className="w-1/2 py-2 font-bold transition-all duration-500 ease-in-out rounded-md hover:bg-color-one bg-color-two text-color-four dark:bg-color-four dark:text-color-one dark:hover:bg-[#ddd]" onClick={sendMessage}>Send</button>
                        <button type="reset" className="w-1/2 py-2 font-bold transition-all duration-500 ease-in-out border-2 rounded-md hover:bg-red-500 hover:border-red-500 hover:text-color-four border-color-two text-color-one dark:border-color-four dark:border-2 dark:text-color-four">Cancel</button>
                    </div>
                </form>
                <h2 className='mt-5 text-2xl font-bold text-left'>Social Media</h2>
                <div className="flex justify-between mt-4 lg:justify-normal lg:gap-7">
                    <MedsosIcon Icon={TbBrandTelegram} hover={'hover:bg-blue-500 hover:text-color-four hover:border-blue-500'} link={'https://t.me/ikhwanhsn'}/>
                    <MedsosIcon Icon={AiOutlineMail} hover={'dark:hover:bg-gray-200 hover:bg-gray-500 hover:text-color-four dark:hover:text-color-one dark:hover:border-color-four hover:border-gray-500 hidden lg:block'} link={'https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ikhwanulhusna111@gmail.com'}/>
                    <MedsosIcon Icon={TbBrandTiktok}  hover={'hover:bg-[#100] hover:text-color-four hover:border-black'}/>
                    <MedsosIcon Icon={TbBrandYoutube}  hover={'hover:bg-red-600 hover:text-color-four hover:border-red-600'}/>
                    <MedsosIcon Icon={TbBrandLinkedin}  hover={'hover:bg-blue-600 hover:text-color-four hover:border-blue-600'}/>
                    <MedsosIcon Icon={TbBrandGithub}  hover={'hover:bg-[#100] hover:text-color-four hover:border-black'} link={'https://github.com/ikhwanhsn'}/>
                </div>
            </div>
            <div className="hidden lg:block lg:absolute lg:top-32 lg:mt-3 lg:right-24">
                <img src={coffe} alt="coffe" className=" w-[400px]"/>
            </div>
            <div className="">
                <p className="flex items-center justify-center gap-1 mt-10">Made with <TbHeartFilled className="text-red-600 animate-pulse"/>by <a href="" className="hover:underline hover:text-blue-500">Ikhwan Dev</a></p>
            </div>
        </div>
     );
}
 
export default Contact;