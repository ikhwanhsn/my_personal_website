import {TbBrandTelegram, TbBrandYoutube, TbBrandLinkedin, TbBrandTiktok, TbBrandGithub, TbHeartFilled} from "react-icons/tb"
import MedsosIcon from "../components/MedsosIcon";

const Contact = () => {

    return ( 
        <div className="pb-5 text-center pt-44 text-color-one mx-7" id="contact">
            <div className="relative">
                <h1 className="text-4xl font-bold drop-shadow-lg">My Contact</h1>
                <h2 className='mt-12 text-3xl font-bold text-left'>Have Coffe with Me?</h2>
                <h2 className='mt-2 text-lg font-bold text-left'>Let's create something new and powerful</h2>
                <textarea name="" id="" className="w-full h-40 p-3 mt-3 border-2 rounded-md shadow-md text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)]" placeholder="Your message..."></textarea>
                <div className="flex w-full gap-2 mt-1">
                    <button className="w-1/2 py-2 font-bold transition-all rounded-md hover:bg-color-one bg-color-two text-color-four">Send</button>
                    <button className="w-1/2 py-2 font-bold transition-all border-2 rounded-md hover:bg-color-one hover:text-color-four border-color-two text-color-one">Cancel</button>
                </div>
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