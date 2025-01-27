import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";
import dataImage from "../api/dataImage.js";
import PortofolioDesc from "../components/PortofolioDesc";

const Portofolio = () => {
  const [slideActive, setSlideActive] = useState(0);

  return (
    <div
      className="h-full text-center transition-all duration-500 ease-in-out lg:h-screen pt-28 lg:px-24 text-color-one px-7 dark:bg-color-one dark:text-color-four lg:dark:bg-color-one"
      id="portofolio"
    >
      <div className="">
        <h1
          className="text-4xl font-bold drop-shadow-lg lg:absolute lg:mt-7 lg:-right-1 lg:mr-96"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          My Portofolio
        </h1>
        <div
          className="shadow-lg mt-9 shadow-[rgba(0,0,0,.1)] lg:float-left lg:relative lg:w-[500px] lg:h-80"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <Splide
            aria-label="My Portofolio"
            options={{ rewind: true, rewindSpeed: 1000 }}
            onMove={(e, d) => setSlideActive(d)}
          >
            {dataImage?.map((item, id) => {
              return (
                <SplideSlide key={id}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-56 rounded-md lg:h-80"
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        {slideActive == 0 && (
          <PortofolioDesc
            title={"GOUMKM Store"}
            desc={`${"Helping small businesses thrive with a user-friendly e-commerce platform. Built with Next.js and MongoDB, it offers a seamless shopping experience. Witness my passion for innovation, design, and user experience."}`}
            github={"https://github.com/ikhwanhsn/go-umkm-new"}
            live={"https://goumkm.store/"}
            tech={"next"}
          />
        )}
        {slideActive == 1 && (
          <PortofolioDesc
            title={"Quiz Web Dev"}
            desc={`${"Simple quiz web app to test your web development knowledge and skills. Built with Next.js and Tailwind CSS to make it responsive and user-friendly. Explore my passion for web development and innovation in a fun and engaging way."}`}
            github={"https://github.com/ikhwanhsn/quiz-web-dev"}
            live={"https://quiz-web-dev.vercel.app/"}
            tech={"next"}
          />
        )}
        {slideActive == 2 && (
          <PortofolioDesc
            title={"Ali Kusensejati"}
            desc={`${"Landing page design for my family's business. Showcasing all products design to make customer easy to find what they need. Built with Next.js and Tailwind CSS and hosted on Vercel to make it fast and responsive. Check it out maybe you like it and want to order :)"}`}
            github={"https://github.com/ikhwanhsn/web-alikusensejati"}
            live={"https://alikusensejati.vercel.app/"}
            tech={"next"}
          />
        )}
        {slideActive == 3 && (
          <PortofolioDesc
            title={"BPM USM"}
            desc={`${"Create a website for my campus organization. Built with Next.js for the frontend and Tailwind CSS for the styling. This website is used to inform the organization's activities and events. Not only that, but it also has a blog feature to share knowledge and information."}`}
            github={"https://github.com/ikhwanhsn/bpm-usm"}
            live={"https://bpm-usm.vercel.app/"}
            tech={"next"}
          />
        )}
        {slideActive == 4 && (
          <PortofolioDesc
            title={"Vocabverse"}
            desc={`${"I build this website to personally improve my English vocabulary. But I make it public so everyone can use it. Built with Next.js and Tailwind CSS to make it responsive and user-friendly. Hopefully it can help many people to improve their English vocabulary."}`}
            github={"https://github.com/ikhwanhsn/vocab-verse"}
            live={"https://vocab-verse.vercel.app/"}
            tech={"next"}
          />
        )}
        {slideActive == 5 && (
          <PortofolioDesc
            title={"Real Estate Company"}
            desc={`${"I present a captivating real estate company profile website, showcasing my expertise in web development. Crafted with precision, this website features elegant design elements, seamless navigation, and responsive. Chek it out!"}`}
            github={"https://github.com/ikhwanhsn/real_estate_web"}
            live={"https://real-estate-id.netlify.app/"}
            tech={"react"}
          />
        )}
        {slideActive == 6 && (
          <PortofolioDesc
            title={"NFT Landing Page"}
            desc={`${"A captivating gateway to the world of digital art and collectibles. Crafted with React it features stunning visuals, smooth animations, and intuitive UX. Witness my passion for innovative design & seamless user experiences."}`}
            github={"https://github.com/ikhwanhsn/nft_landing_page"}
            live={"https://nft-sites.netlify.app/"}
            tech={"react"}
          />
        )}
        {slideActive == 7 && (
          <PortofolioDesc
            title={"Online Course Web"}
            desc={`${"An engaging platform designed to inspire and educate. Seamlessly blending React & Tailwind to offer intuitive navigation, interactive features, and captivating content. Explore my dedication to empowering learners worldwide!."}`}
            github={"https://github.com/ikhwanhsn/online_course_edspert.id"}
            live={"https://edspert-id.netlify.app/"}
            tech={"react"}
          />
        )}
        {slideActive == 8 && (
          <PortofolioDesc
            title={"Digital Calculator"}
            desc={`${"A simple digital calculator to help you with your daily calculations. Just a simple project to practice my skills in web development. This project helps me to understand the basic concept of web development and design also test my logic."}`}
            github={"https://github.com/ikhwanhsn/digital_calc"}
            live={"https://digitalcalc.netlify.app/"}
            tech={""}
          />
        )}
      </div>
    </div>
  );
};

export default Portofolio;
