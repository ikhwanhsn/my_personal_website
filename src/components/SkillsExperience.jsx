import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GiConfirmed } from "react-icons/gi";
import { TbArrowUpRight, TbBrandGithub } from "react-icons/tb";

const SkillsExperience = ({title, date, src, desc,modal, click}) => {
    return ( 
        <div className="">
            <li><GiConfirmed className='inline-block text-green-600'/> {title} <button href="" className='text-blue-600 hover:underline dark:text-blue-500' onClick={click}>details</button></li>
            <dialog id={`my_modal_${modal}`} className="modal">
                <form method="dialog" className="overflow-hidden shadow-md modal-box bg-color-four dark:bg-color-one">
                    <button className="absolute font-bold shadow-sm btn btn-sm btn-circle btn-ghost right-2 top-2 text-color-one bg-color-four dark:bg-color-one dark:hover:bg-color-two dark:text-color-four hover:bg-[#ddd]">✕</button>
                    <img src={src} alt="porto" className='w-full rounded-md h-52 lg:h-80'/>
                    {/* <div className="shadow-lg mt-9 shadow-[rgba(0,0,0,.1)]">
                        <Splide aria-label="My Experience" options={ {rewind: true, rewindSpeed:1000, speed:800} }>
                            <SplideSlide>
                                <img src={src} alt='image'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src={src} alt='image'/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src={src} alt='image'/>
                            </SplideSlide>
                        </Splide>
                    </div> */}
                    <h3 className="mt-3 text-lg font-bold text-color-one dark:text-color-four">{title}</h3>
                    <p className='text-sm'>Date : {date}</p>
                    <h5 className='font-bold '>Desc :</h5>
                    <p className='leading-5'>{desc}</p>
                    {/* <div className="flex gap-2 mt-3">
                        <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-color-one hover:text-color-four dark:border-color-four dark:text-color-four dark:hover:bg-color-four dark:hover:text-color-one dark:hover:border-color-four"><TbBrandGithub className="mx-auto scale-125"/></button>
                        <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-blue-600 hover:text-color-four dark:border-color-four dark:text-color-four"><TbArrowUpRight className="mx-auto scale-150"/></button>
                    </div> */}
                </form>
            </dialog>
        </div>
     );
}
 
export default SkillsExperience;