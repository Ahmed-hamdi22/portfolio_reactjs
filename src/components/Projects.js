import React from "react";
import movie from "../assets/movie.png";
import  amazon from "../assets/amazon.png";
import landang from "../assets/landing.png";
import landang2 from "../assets/landewb.png";
import food from "../assets/food.png";
import commerce from "../assets/e-com.png";
import gym from "../assets/gym.png";
import eshop from "../assets/eshop.png"

import dashboard from "../assets/dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      img:eshop,
      title: "e-shoping ",
      desc: ". React, on the frontend",
      live: "https://e-commerce-nats.vercel.app/",
      code: "https://github.com/Ahmed-hamdi22/E-Commerce.git",
    },
    {
      img: gym,
      title: "gym",
      desc: " A multi author blog. Built with  React, Redux and Tailwind CSS ",
      live: "https://gym-three-psi.vercel.app/",
      code: "https://github.com/Ahmed-hamdi22/gym",
    },
    {
      img: amazon,
      title: "amazon",
      desc: " fire base ,A multi author blog. Built with  React, Redux and Tailwind CSS ",
      live: "https://my-92066.web.app/",
      code: "https://github.com/",
    },
    {
      img:food,
      title: "get Inspirred",
      desc: ". Materialui and React, on the frontend",
      live: "https://food-one-psi.vercel.app",
      code: "https://github.com/Ahmed-hamdi22/food",
    },
    {
      img: commerce,
            title: "e-commmerce-only-design",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap,react and JavaScript",
      live: "https://e-commmerce-only-design.vercel.app/",
      code: "https://github.com/Ahmed-hamdi22/e-commmerce-only-design",
    },
   
    
    {
      img: dashboard,
      title: "dashboard",
      desc: " dashboard for add,delete and edit user porducts i am useing react ,bootstrap,context , Authentication with Access,Refresh Tokens, Cookies and Axios",
      live: "https://github.com/Ahmed-hamdi22/dashboard...",
      code: "https://github.com/Ahmed-hamdi22/dashboard",
    },
    {
      img:landang2,
      title: "landing page",
      desc: "build with html ,css,react, ",
      live: "https://landing-web-wheat.vercel.app/",
      code: "https://github.com/Ahmed-hamdi22/landing-web",
    },
    {
      img:landang,
      title: "landing page",
      desc: "build with html ,css,react, ",
      live: "https://profile-company-seven.vercel.app/",
      code: "https://github.com/Ahmed-hamdi22/profile-company",
    },
    {
      img: movie,
      title: "get Inspirred",
      desc: ". Materialui and React, Redux on the frontend",
      live: "https://movie-apps-iota.verce",
      code: "https://github.com/Ahmed-hamdi22/movie-apps",
    },
    
    

  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
