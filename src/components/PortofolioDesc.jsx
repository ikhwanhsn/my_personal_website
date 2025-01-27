import {
  TbArrowUpRight,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandNextjs,
} from "react-icons/tb";
import SkillsIcon from "./SkillsIcon";

const PortofolioDesc = ({ title, desc, github, live, tech }) => {
  return (
    <div className="">
      <div
        className={`flex flex-col mt-9 text-left lg:w-1/2 lg:float-right lg:pl-5 lg:mt-28 lg:pr-3`}
      >
        <h2
          className="mb-2 text-2xl font-bold"
          data-aos="zoom-in-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {title}
        </h2>
        <p
          className="w-full h-32 overflow-hidden"
          data-aos="zoom-in-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {desc}
        </p>
        <div className="flex items-center justify-between lg:mt-4">
          <div className="flex ml-3 mt-7 gap-7">
            <SkillsIcon
              Icon={TbBrandJavascript}
              style={"scale-[3] mx-auto"}
              styleChild={"mt-5 -ml-2"}
            ></SkillsIcon>
            <SkillsIcon
              Icon={TbBrandTailwind}
              style={"scale-[3] mx-auto"}
              styleChild={"mt-5"}
            ></SkillsIcon>
            {tech == "react" && (
              <SkillsIcon
                Icon={TbBrandReact}
                style={"scale-[3] mx-auto"}
                styleChild={"mt-5"}
              ></SkillsIcon>
            )}
            {tech == "next" && (
              <SkillsIcon
                Icon={TbBrandNextjs}
                style={"scale-[3] mx-auto"}
                styleChild={"mt-5"}
              ></SkillsIcon>
            )}
          </div>
          <div
            className="flex gap-2 mt-2"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <a href={github} target="_blank">
              <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-color-one hover:text-color-four dark:border-color-four dark:text-color-four dark:hover:bg-color-four dark:hover:text-color-one dark:hover:border-color-four">
                <TbBrandGithub className="mx-auto scale-125" />
              </button>
            </a>
            <a href={live} target="_blank">
              <button className="w-12 h-12 transition-all duration-500 ease-in-out border-2 rounded-lg border-color-one text-color-one hover:bg-color-tree hover:border-color-tree hover:text-color-four dark:border-color-four dark:text-color-four">
                <TbArrowUpRight className="mx-auto scale-150" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioDesc;
