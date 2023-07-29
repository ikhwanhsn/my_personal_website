import profil from '../../public/img/profil.png';

const About = () => {
    return ( 
        <div className="w-full h-screen">
            <div className="">
                <img src={profil} alt="profil" className='h-auto pt-20 mx-auto w-80 drop-shadow-xl'/>
            </div>
            <div className="mt-5 text-center text-color-one">
                <h1 className='text-4xl font-bold drop-shadow-lg'>Hi There...</h1>
                <h2 className='mt-2 text-2xl font-bold'>My name is Ikhwanul Husna</h2>
                <p className='mt-3 mx-7'>I'm student in collage and very interested in technology. Now I dive to learn about Frontend Developer and how to make a website very powerfull and have great a user experience...</p>
                <button className='px-5 py-2 mt-6 border-2 rounded-full shadow-md trasition-all border-color-one hover:bg-color-one hover:text-color-four shadow-[rgba(0,0,0,.2)]'>See more</button>
            </div>
        </div>
     );
}
 
export default About;