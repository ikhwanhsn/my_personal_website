import {TbBrandTelegram, TbBrandYoutube, TbBrandLinkedin, TbBrandTiktok, TbBrandGithub, TbHeartFilled} from "react-icons/tb"
import MedsosIcon from "../components/MedsosIcon";
import {useState} from 'react';

const Contact = () => {
    const [myAlert, setMyAlert] = useState(false);
    const [firstAlert, setFirstAlert] = useState(false);

    const alertInput = () => {
        if(!firstAlert) {
            setMyAlert(true)
            setTimeout(() => setMyAlert(false),3000)
            setFirstAlert(true)
            setTimeout(() => setFirstAlert(false),180000)
        }
    }

    return ( 
        <div className="pb-5 text-center text-color-one mx-7">
            <div className="relative">
                <h1 className="text-4xl font-bold drop-shadow-lg">My Contact</h1>
                <h2 className='mt-12 text-3xl font-bold text-left'>Have Coffe with Me?</h2>
                <h2 className='mt-2 text-lg font-bold text-left'>Let's create something new and powerful</h2>
                <textarea name="" id="" className="w-full h-40 p-3 mt-3 border-2 rounded-md shadow-md text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)]" placeholder="Your message..." onClick={alertInput}></textarea>
                {myAlert && <div className={`absolute opacity-100 scale-100 transition-all ease-in-out duration-500 ml-10 -mt-20 w-64 flex justify-center alert alert-warning ${!myAlert && "hidden opacity-0 scale-50"}`}>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Enter to send message!</span>
</div>}
                <h2 className='mt-3 text-2xl font-bold text-left'>Social Media</h2>
                <div className="flex justify-between mt-4">
                    <MedsosIcon Icon={TbBrandTelegram}/>
                    <MedsosIcon Icon={TbBrandLinkedin}/>
                    <MedsosIcon Icon={TbBrandGithub}/>
                    <MedsosIcon Icon={TbBrandTiktok}/>
                    <MedsosIcon Icon={TbBrandYoutube}/>
                </div>
            </div>
            <div className=""></div>
            <div className="">
                <p className="flex items-center justify-center gap-1 mt-8">Made with <TbHeartFilled className="text-red-600 animate-pulse"/>by <a href="" className="hover:underline hover:text-blue-500">Ikhwan Dev</a></p>
            </div>
        </div>
     );
}
 
export default Contact;