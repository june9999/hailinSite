import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
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
      <div className="h-[30rem] w-[40rem] border-4">Image</div>
    </div>
  );
};

export default About;
