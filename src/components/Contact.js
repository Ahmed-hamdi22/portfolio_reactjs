import React from "react";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import "./Contact.css";
import { AiOutlinePhone } from "react-icons/ai";



const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold email"> 
           <CgMail className="email" size={30} />
           <a href="mailto:ahmed255hamdi@gmail.com">: ahmed255hamdi@gmail.com</a></span>
           
        </p>


        <p className="py-2">
          <span className="font-bold phone">
          <FaWhatsapp className="phone"  size={30}/>
 &
          <AiOutlinePhone size={30} />: +2 01066543802</span> 
         
        </p>
      
    <p>
    <a
        className="linkedin"
              href="https://www.linkedin.com/in/ahmed-hamdi-86ab2b23a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" size={25} />

              linkedin
            </a>
    </p>
         <p>
         <a 
         className="github"
              href="https://github.com/Ahmed-hamdi22"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github"size={25} />
              Github
            </a>
         </p>
       
      
      </div>
      
    </section>
  );
};

export default Contact;

