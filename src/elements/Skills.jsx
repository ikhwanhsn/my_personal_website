import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandPhp, TbBrandTailwind, TbBrandBootstrap, TbBrandReact, TbBrandNextjs} from 'react-icons/tb';
import SkillsIcon from '../components/SkillsIcon';

const Skills = () => {
    return ( 
        <div className="pt-24 text-center" id='skills'>
            <div className="mx-7">
                <h1 className="text-4xl font-bold text-color-one drop-shadow-lg">My Skills</h1>
                <div className="grid grid-cols-4 px-5 mt-8 border-4 rounded-md shadow-lg gap-x-5 gap-y-12 py-9 text-color-one bg-color-four border-color-one shadow-[rgba(0,0,0,.2)]">
                    <SkillsIcon Icon={TbBrandHtml5} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}>HTML</SkillsIcon>
                    <SkillsIcon Icon={TbBrandCss3} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}>CSS</SkillsIcon>
                    <SkillsIcon Icon={TbBrandJavascript} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'} styleChild={'mt-5 -ml-2'}>Javascript</SkillsIcon>
                    <SkillsIcon Icon={TbBrandPhp} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'} styleChild={'mt-5'}>PHP</SkillsIcon>
                    <SkillsIcon Icon={TbBrandTailwind} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}>Tailwind</SkillsIcon>
                    <SkillsIcon Icon={TbBrandBootstrap} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5 -ml-1'}>Bootstrap</SkillsIcon>
                    <SkillsIcon Icon={TbBrandReact} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}>React</SkillsIcon>
                    <SkillsIcon Icon={TbBrandNextjs} style={'scale-[3] mx-auto hover:scale-[3.3] transition-all'}styleChild={'mt-5'}>Next</SkillsIcon>
                </div>
            </div>
            <div className=""></div>
        </div>
     );
}
 
export default Skills;