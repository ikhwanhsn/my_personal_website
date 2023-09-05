import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandPhp, TbBrandTailwind, TbBrandBootstrap, TbBrandReact, TbBrandNextjs} from 'react-icons/tb';
import SkillsIcon from '../components/SkillsIcon';
import {GiConfirmed} from 'react-icons/gi'
import fullstack1 from '../../public/img/fullstack1.webp'
import dicoding1 from '../../public/img/dicoding1.webp'
import react1 from '../../public/img/react1.webp'
import SkillsExperience from '../components/SkillsExperience';

const Skills = () => {
    return ( 
        <div className="pt-24 text-center transition-all duration-500 ease-in-out dark:bg-color-one dark:text-color-four bg-color-four text-color-one lg:flex lg:justify-between lg:px-20 lg:h-screen lg:items-center lg:pt-0" id='skills'>
            <div className="transition-all duration-500 ease-in-out mx-7 lg:mx-4 dark:bg-color-one dark:text-color-four bg-color-four text-color-one lg:text-left">
                <h1 className="text-4xl font-bold transition-all duration-500 ease-in-out text-color-one drop-shadow-lg dark:text-color-four" data-aos="fade-right" data-aos-duration="500">My Skills</h1>
                <div className="grid lg:w-[500px] lg:h-80 lg:text-center grid-cols-4 px-5 mt-8 border-4 rounded-md shadow-md gap-x-5 lg:pt-14 gap-y-12 py-9 transition-all ease-in-out duration-500 dark:bg-color-one dark:text-color-four bg-color-four text-color-one shadow-[rgba(0,0,0,.2)] dark:shadow-[rgba(255,255,255,0.04)]">
                    <SkillsIcon Icon={TbBrandHtml5} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5'}>HTML</SkillsIcon>
                    <SkillsIcon Icon={TbBrandCss3} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5'}>CSS</SkillsIcon>
                    <SkillsIcon Icon={TbBrandJavascript} style={'scale-[3] mx-auto hover:scale-[3.3]'} styleChild={'mt-5 -ml-2'}>Javascript</SkillsIcon>
                    <SkillsIcon Icon={TbBrandPhp} style={'scale-[3] mx-auto hover:scale-[3.3]'} styleChild={'mt-5'}>PHP</SkillsIcon>
                    <SkillsIcon Icon={TbBrandTailwind} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5'}>Tailwind</SkillsIcon>
                    <SkillsIcon Icon={TbBrandBootstrap} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5 -ml-1'}>Bootstrap</SkillsIcon>
                    <SkillsIcon Icon={TbBrandReact} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5'}>React</SkillsIcon>
                    <SkillsIcon Icon={TbBrandNextjs} style={'scale-[3] mx-auto hover:scale-[3.3]'}styleChild={'mt-5'}>Next</SkillsIcon>
                </div>
            </div>
            <div className="lg:absolute lg:left-96 lg:ml-60">
                <div className="px-7" data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">
                    <h3 className='mt-5 text-xl font-bold text-left'>Experience :</h3>
                    <ol className='mt-2 leading-8 text-left'>
                        <SkillsExperience title={'Edspert Id Bootcamp (React JS)'} src={react1} date={'23-07-2023'} desc={'This comprehensive online course offered by Edspert.id is designed to equip you with the essential skills to create an impressive portfolio website using React JS.'} click={()=>window.my_modal_1.showModal()} modal={1}/>
                        <SkillsExperience title={'Kelas Fullstack Id (Fullstack Dev)'} src={fullstack1} date={'18-05-2023'} desc={'This comprehensive online program is thoughtfully designed to equip you with the skills and knowledge necessary to become a versatile Fullstack Developer.'} click={()=>window.my_modal_2.showModal()} modal={2}/>
                        <SkillsExperience title={'Dicoding Academy (Javascript)'} src={dicoding1} date={'09-07-2022'} desc={'This course provides a comprehensive learning experience, focusing on the latest web development technologies and industry best practices.'} click={()=>window.my_modal_3.showModal()} modal={3}/>
                        <SkillsExperience title={'Baparekraf Kominfo (Web Developer)'} src={''} date={'21-06-2023'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam architecto odio cassumenda!'} modal={4}/>
                    </ol>
                </div>
                <div className="px-7" data-aos="fade-left" data-aos-delay="100" data-aos-duration="500">
                    <h3 className='mt-3 text-xl font-bold text-left'>Language :</h3>
                    <ul className='mt-2 leading-8 text-left'>
                        <li><GiConfirmed className='inline-block text-green-600'/> Indonesian (Native)</li>
                        <li><GiConfirmed className='inline-block text-green-600'/> English</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;