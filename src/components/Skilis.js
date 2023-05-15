

import React from "react";
import "../components/Skillscss.css";
import { FaReact, FaNodeJs, FaAws, FaPhp, FaGit, FaLaravel, FaSass } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap} from "react-icons/bs";
const Skilis = () => {
  return (
    <>
    {/* <div className="section main" data-aos="fade-right"> */}
    <div className="bg-secondery text-white px-5 py-32" id="Skilis">

    <div className="container mx-auto gridmd:grid-cols-2 items-center md:justify-between">
      <h2 className="section__title different    text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">Skilis</h2>
      <div className="techsection">
        <div>
          <SiJavascript />
          <h5>Javascript</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS</h5>
        </div>
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <FaPhp />
          <h5>Php</h5>
        </div>
        <div>
          <FaGit />
          <h5>Git</h5>
        </div>

       
       
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <SiRedux/>

          <h5>Redux</h5>
        </div>
        <div>
          <FaLaravel/>
          <h5>Laravel</h5>
        </div>
        <div>
          <SiMaterialui/>
          <h5>Ui</h5>
        </div>
        <div>
          <VscGithub />
          <h5>Github</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default Skilis
