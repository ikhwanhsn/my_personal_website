import profil from '../../public/img/profil.png';
import { AutoTyping } from '../components/AutoTyping';

const About = () => {
    return ( 
        <div className={`w-full h-full transition-all duration-500 ease-in-out`}>
            <div className="transition-all duration-500 ease-in-out dark:bg-color-one dark:text-color-four bg-color-four text-color-one">
                <img src={profil} alt="profil" className='h-auto pt-20 mx-auto w-80 drop-shadow-xl'/>
            </div>
            <div className="pt-5 text-center transition-all duration-500 ease-in-out dark:bg-color-one dark:text-color-four bg-color-four text-color-one">
                <h1 className={`mb-2 text-4xl font-bold drop-shadow-lg`}>Hi There <p className='inline-block animate-wiggle'>👋</p></h1>
                <AutoTyping/>
                <p className='mt-3 mx-7'>I'm student in collage and very interested in technology. Now I dive to learn about Frontend Developer and how to make a website very powerfull and have great a user experience...</p>
                <a href="#skills">
                    <button className='px-5 py-2 mt-6 border-2 rounded-full shadow-md font-bold border-color-one hover:bg-color-one hover:text-color-four shadow-[rgba(0,0,0,.2)] dark:border-color-four dark:hover:bg-color-four dark:hover:text-color-one dark:hover:border-color-four'>See more</button>
                </a>
            </div>
        </div>
     );
}
 
export default About;