import {
  TbBrandTelegram,
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandGithub,
  TbHeartFilled,
  TbBrandInstagram,
} from "react-icons/tb";
import MedsosIcon from "../components/MedsosIcon";
import { AiOutlineMail } from "react-icons/ai";
import coffe from "../../public/img/coffe.webp";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgorwnv");
  const [showedAlert, setShowedAlert] = useState(false);

  useEffect(() => {
    if (state.succeeded && !showedAlert) {
      Swal.fire(
        "Send Message Successfully",
        "Thank for contact us, have a nice day :)",
        "success"
      );
      setShowedAlert(true);
      const email = document.querySelector("input[name=email]");
      const message = document.querySelector("textarea[name=message]");
      if (email) email.value = "";
      if (message) message.value = "";
    }
  }, [state.succeeded, showedAlert]);
  useEffect(() => {
    if (!state.submitting && showedAlert) {
      setShowedAlert(false);
    }
  }, [state.submitting]);

  return (
    <div
      className="pt-24 pb-5 text-center transition-all duration-500 ease-in-out lg:relative lg:pt-8 text-color-one px-7 lg:px-24 dark:bg-color-one dark:text-color-four lg:clear-both"
      id="contact"
    >
      <div
        className="relative lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h1 className="text-4xl font-bold drop-shadow-lg lg:hidden">
          My Contact
        </h1>
        <h2 className="text-3xl font-bold text-left mt-14">
          Have Coffe with Me?
        </h2>
        <h2 className="mt-1 text-lg font-bold text-left">
          Let's create something new and powerful
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="w-full h-full p-3 mt-3 border-2 rounded-md shadow-sm transition-all duration-500 ease-in-out placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)] dark:bg-color-one dark:border-color-four dark:text-color-four dark:placeholder:text-color-four"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            id="message"
            className="w-full h-40 p-3 mt-3 border-2 rounded-md shadow-sm transition-all duration-500 ease-in-out placeholder:transition-all placeholder:duration-500 placeholder:ease-in-out text-color-one placeholder:text-color-one focus:border-color-one focus:outline-none border-color-one bg-color-four shadow-[rgba(0,0,0,.2)] dark:bg-color-one dark:border-color-four dark:text-color-four dark:placeholder:text-color-four"
            placeholder="Your message..."
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex w-full gap-2 mt-1">
            <button
              className="w-1/2 py-2 font-bold transition-all duration-500 ease-in-out rounded-md hover:bg-color-one bg-color-two text-color-four dark:bg-color-four dark:text-color-one dark:hover:bg-[#ddd]"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </button>
            <button
              type="reset"
              className="w-1/2 py-2 font-bold transition-all duration-500 ease-in-out border-2 rounded-md hover:bg-red-500 hover:border-red-500 hover:text-color-four border-color-two text-color-one dark:border-color-four dark:border-2 dark:text-color-four"
            >
              Cancel
            </button>
          </div>
        </form>
        <h2 className="mt-5 text-2xl font-bold text-left">Social Media</h2>
        <div className="flex justify-between mt-4 lg:justify-normal lg:gap-7">
          <MedsosIcon
            Icon={TbBrandTelegram}
            hover={
              "hover:bg-blue-500 hover:text-color-four hover:border-blue-500"
            }
            link={"https://t.me/ikhwanhsn"}
          />
          <MedsosIcon
            Icon={AiOutlineMail}
            hover={
              "dark:hover:bg-gray-200 hover:bg-gray-500 hover:text-color-four dark:hover:text-color-one dark:hover:border-color-four hover:border-gray-500 hidden lg:block"
            }
            link={"mailto:ikhwanulhusna111@gmail.com"}
          />
          <MedsosIcon
            Icon={TbBrandTiktok}
            hover={"hover:bg-[#100] hover:text-color-four hover:border-black"}
            link={"https://www.tiktok.com/@smartweb3.id"}
          />
          <MedsosIcon
            Icon={TbBrandInstagram}
            hover={
              "hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 hover:text-color-four hover:border-pink-500"
            }
            link={"https://www.instagram.com/ikhwanhsn21/"}
          />
          <MedsosIcon
            Icon={TbBrandLinkedin}
            hover={
              "hover:bg-blue-600 hover:text-color-four hover:border-blue-600"
            }
            link={"https://www.linkedin.com/in/ikhwanhsn/"}
          />
          <MedsosIcon
            Icon={TbBrandGithub}
            hover={"hover:bg-[#100] hover:text-color-four hover:border-black"}
            link={"https://github.com/ikhwanhsn"}
          />
        </div>
      </div>
      <div
        className="hidden lg:block lg:absolute lg:top-32 lg:mt-3 lg:right-24"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <img src={coffe} alt="coffe" className=" w-[400px]" />
      </div>
      <div className="">
        <p className="flex items-center justify-center gap-1 mt-10">
          Made with <TbHeartFilled className="text-red-600 animate-pulse" />
          by{" "}
          <a href="" className="hover:underline hover:text-blue-500">
            Ikhwan Dev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
