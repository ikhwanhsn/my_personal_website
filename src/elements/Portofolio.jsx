import SkillsIcon from "../components/SkillsIcon";
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandPhp, TbBrandTailwind, TbBrandBootstrap, TbBrandReact, TbBrandNextjs, TbBrandGithub, TbArrowUpRight} from 'react-icons/tb';
import porto1 from '../../public/img/porto1.webp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Portofolio = () => {
    return ( 
        <div className="h-screen pt-24 text-center text-color-one mx-7">
            <div className="">
                <h1 className="text-4xl font-bold drop-shadow-lg">My Portofolio</h1>
                {/* <div className="">
                    <div className="shadow-lg pt-7 carousel shadow-[rgba(0,0,0,.1)]">
                        <div id="slide1" className="relative w-full carousel-item">
                            <img src={porto1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="w-full carousel-item">
                            <img src={porto1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="relative w-full carousel-item">
                            <img src={porto1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="relative w-full carousel-item">
                            <img src={porto1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="shadow-lg mt-7 shadow-[rgba(0,0,0,.1)]">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <img src={porto1} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={porto1} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={porto1} alt="Image 1"/>
                        </SplideSlide>
                    </Splide>
                </div>
                {/* <div className="w-full mt-5 rounded-lg shadow-lg h-80 shadow-color-two bg-color-one"></div> */}
                <div className="flex flex-col mt-8 text-left">
                    <h2 className="mb-2 text-2xl font-bold">WhatsApp Clone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet cumque velit eos temporibus mollitia beatae perspiciatis numquam, quis maxime nihil! Neque, corporis at. Dolor quis culpa quos, ipsa soluta atque </p>
                    <div className="flex items-center gap-7">
                        <div className="flex ml-3 mt-7 gap-7">
                            <SkillsIcon Icon={TbBrandHtml5} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}></SkillsIcon>
                            <SkillsIcon Icon={TbBrandCss3} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}></SkillsIcon>
                            <SkillsIcon Icon={TbBrandJavascript} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'} styleChild={'mt-5 -ml-2'}></SkillsIcon>
                            <SkillsIcon Icon={TbBrandTailwind} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}></SkillsIcon>
                            <SkillsIcon Icon={TbBrandReact} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}></SkillsIcon>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <button className="w-12 h-12 transition-all border-2 rounded-lg border-color-one text-color-one hover:bg-color-one hover:text-color-four"><TbBrandGithub className="mx-auto scale-125"/></button>
                            <button className="w-12 h-12 transition-all border-2 rounded-lg border-color-one text-color-one hover:bg-color-one hover:text-color-four"><TbArrowUpRight className="mx-auto scale-150"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

 
export default Portofolio;