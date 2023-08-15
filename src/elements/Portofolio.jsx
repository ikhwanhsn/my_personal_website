import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState } from "react";
import dataImage from '../api/dataImage.js'
import PortofolioDesc from "../components/PortofolioDesc";

const Portofolio = () => {
    const [slideActive, setSlideActive] = useState(0);
    
    return ( 
        <div className="h-full text-center transition-all duration-500 ease-in-out lg:h-screen pt-28 lg:px-24 text-color-one px-7 dark:bg-color-one dark:text-color-four lg:dark:bg-color-one" id="portofolio">
            <div className="">
                <h1 className="text-4xl font-bold drop-shadow-lg lg:absolute lg:mt-7 lg:-right-1 lg:mr-96">My Portofolio</h1>
                <div className="shadow-lg mt-9 shadow-[rgba(0,0,0,.1)] lg:float-left lg:relative lg:w-[500px] lg:h-80">
                    <Splide aria-label="My Portofolio" options={ {rewind: true, rewindSpeed:1000} } onMove={(e, d) => setSlideActive(d) }>
                        {dataImage?.map((item, id) => {
                            return <SplideSlide key={id}>
                            <img src={item.src} alt={item.alt} className='w-full h-56 rounded-md lg:h-80'/>
                        </SplideSlide>
                        })}
                    </Splide>
                </div>
                {slideActive == 0 && <PortofolioDesc title={'Real Estate Company'} desc={`${('I present a captivating real estate company profile website, showcasing my expertise in web development. Crafted with precision, this website features elegant design elements, seamless navigation, and responsive.').slice(0, 195)}...`} github={'https://github.com/ikhwanhsn/real_estate_web'} live={'https://real-estate-id.netlify.app/'} tech={'react'}/>}
                {slideActive == 1 && <PortofolioDesc title={'NFT Landing Page'} desc={`${('A captivating gateway to the world of digital art and collectibles. Crafted with React it features stunning visuals, smooth animations, and intuitive UX. Witness my passion for innovative design & seamless user experiences.').slice(0,195)}...`}  github={'https://github.com/ikhwanhsn/nft_landing_page'} live={'https://nft-sites.netlify.app/'} tech={'react'}/>}
                {slideActive == 2 && <PortofolioDesc title={'Online Course Web'} desc={`${('An engaging platform designed to inspire and educate. Seamlessly blending React & Tailwind to offer intuitive navigation, interactive features, and captivating content. Explore my dedication to empowering learners worldwide!.').slice(0,190)}...`}  github={'https://github.com/ikhwanhsn/online_course_edspert.id'} live={'https://edspert-id.netlify.app/'} tech={'react'}/>}
                {slideActive == 3 && <PortofolioDesc title={'Digital Calculator'} desc={`${('Discover my digital calculator website portfolio! Powered by HTML, CSS & JS, it offers fast & accurate calculations. Sleek design, user-friendly interface, and responsive layout showcase my proficiency in web development.').slice(0,190)}...`}  github={'https://github.com/ikhwanhsn/digital_calc'} live={'https://digitalcalc.netlify.app/'} tech={''}/>}
            </div>
        </div>
     );
}

 
export default Portofolio;