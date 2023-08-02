import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState } from "react";
import dataImage from '../api/dataImage.js'
import PortofolioDesc from "../components/PortofolioDesc";

const Portofolio = () => {
    const [slideActive, setSlideActive] = useState(0);

    return ( 
        <div className="h-full text-center transition-all duration-500 ease-in-out pt-28 text-color-one px-7 dark:bg-color-one dark:text-color-four" id="portofolio">
            <div className="">
                <h1 className="text-4xl font-bold drop-shadow-lg">My Portofolio</h1>
                <div className="shadow-lg mt-9 shadow-[rgba(0,0,0,.1)]">
                    <Splide aria-label="My Portofolio" options={ {rewind: true, rewindSpeed:1000} } onMove={(e, d) => setSlideActive(d) }>
                        {dataImage?.map((item, id) => {
                            return <SplideSlide key={id}>
                            <img src={item.src} alt={item.alt}/>
                        </SplideSlide>
                        })}
                    </Splide>
                </div>
                {slideActive == 0 && <PortofolioDesc title={'WhatsApp Clone'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet cumque velit eos temporibus mollitia beatae perspiciatis numquam, quis maxime nihil! Neque, corporis at. Dolor quis culpa quos, ipsa soluta atque'} github={''} live={''}/>}
                {slideActive == 1 && <PortofolioDesc title={'Facebook Clone'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet cumque velit eos temporibus mollitia beatae'}  github={''} live={''}/>}
                {slideActive == 2 && <PortofolioDesc title={'Telegram Clone'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet cumque velit eos temporibus mollitia beatae perspiciatis numquam, quis maxime nihil! r quis culpa quos, ipsa soluta atque'}  github={''} live={''}/>}
            </div>
        </div>
     );
}

 
export default Portofolio;