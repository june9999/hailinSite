import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[50%]">
        <p>Hailin Li is a Chinese artise from NingBo, China. </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ipsa, quidem voluptatibus cum odit animi temporibus voluptate
          recusandae sequi! Reprehenderit molestiae delectus, est saepe ex nihil
          magnam quas harum incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ipsa, quidem voluptatibus cum odit animi temporibus voluptate
          recusandae sequi! Reprehenderit molestiae delectus, est saepe ex nihil
          magnam quas harum incidunt.
        </p>
      </div>
      <div className="w-[50%] h-[30rem]  border-4 m-[2rem]">Image</div>
    </div>
  );
};

export default About;
