import React from "react";
import HeroImg from "../assets/hero-img.png";
import { CgMail } from "react-icons/cg";



import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">a</span>hmed <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Redux 
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/ahmed-hamdi-86ab2b23a/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
            
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
             
            </a>
            <a
                            href="https://github.com/Ahmed-hamdi22"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
             
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          
            <a
                className="pr-4 inline-block text-accent hover:text-white"
              href="mailto:ahmed255hamdi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail size={40} />
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
