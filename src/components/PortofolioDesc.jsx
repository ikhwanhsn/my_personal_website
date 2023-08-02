import { TbArrowUpRight, TbBrandCss3, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandReact, TbBrandTailwind } from "react-icons/tb";
import SkillsIcon from "./SkillsIcon";

const PortofolioDesc = ({title, desc, github, live}) => {
    return ( 
        <div className="">
            <div className={`flex flex-col mt-9 text-left`}>
                <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                <p className="w-full h-32">{desc}</p>
                <div className="flex items-center gap-7">
                    <div className="flex ml-3 mt-7 gap-7">
                        <SkillsIcon Icon={TbBrandHtml5} style={'scale-[3] mx-auto'}styleChild={'mt-5'}></SkillsIcon>
                        <SkillsIcon Icon={TbBrandCss3} style={'scale-[3] mx-auto'}styleChild={'mt-5'}></SkillsIcon>
                        <SkillsIcon Icon={TbBrandJavascript} style={'scale-[3] mx-auto'} styleChild={'mt-5 -ml-2'}></SkillsIcon>
                        <SkillsIcon Icon={TbBrandTailwind} style={'scale-[3] mx-auto'}styleChild={'mt-5'}></SkillsIcon>
                        <SkillsIcon Icon={TbBrandReact} style={'scale-[3] mx-auto'}styleChild={'mt-5'}></SkillsIcon>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <a href={github}>
                            <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-color-one hover:text-color-four dark:border-color-four dark:text-color-four dark:hover:bg-color-four dark:hover:text-color-one dark:hover:border-color-four"><TbBrandGithub className="mx-auto scale-125"/></button>
                        </a>
                        <a href={live}>
                            <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-color-tree hover:border-color-tree hover:text-color-four dark:border-color-four dark:text-color-four"><TbArrowUpRight className="mx-auto scale-150"/></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PortofolioDesc;