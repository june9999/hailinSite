import Link from "next/link";
import React from "react";

const page = () => {
  return (
    // <div classNameName="flex flex-wrap">
    //   <div classNameName="md:w-[50%] md:pt-[7rem] md:px-[3rem]">
    //     <h1 classNameName="text-4xl md:text-7xl tracking-tighter">RECENT DESIGN</h1>
    //     <p classNameName="py-[1rem] md:px-[3rem] md:pt-[3rem]">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    //       distinctio iusto soluta illum eum, commodi id officia temporibus et
    //       voluptates ut asperiores reiciendis delectus minima, voluptas possimus
    //       minus dolorem quibusdam!
    //     </p>
    //   </div>
    //   <div classNameName="flex relative md:w-[50%] md:pt-[10rem] md:px-[3rem]">
    //     <img
    //       classNameName="w-[30rem] pt-[2rem]"
    //       src="https://res.cloudinary.com/dcfs6js7g/image/upload/v1706538599/Karussell_25_2021_%C3%96l_und_Acryl_auf_Leinwand_22x30cm_zrojto.jpg"
    //       alt="try"
    //     />
    //   </div>
    //   <div classNameName="flex pt-[2rem] md:pl-[10rem] gap-x-[7rem] md:relative md:top-[-7rem] ">
    //     <Link
    //       href="/works"
    //       classNameName="flex font-3xl border-4 border-solid border-black w-[10rem] items-center h-[3rem] justify-center md:left-[10rem] "
    //     >
    //       See More
    //     </Link>
    //     <img
    //       classNameName="h-[50px]"
    //       width="50"
    //       height="50"
    //       src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
    //       alt="long-arrow-right--v1"
    //     />
    //   </div>
    // </div>
    <div className="flex bg-white">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            Latest <span className="text-indigo-600">Idea</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates. Cumque debitis
            dignissimos id quam vel!
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a
              className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
              href="#"
            >
              Get Started
            </a>
            <a
              className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        // style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          className="h-full object-cover [url(https://res.cloudinary.com/dcfs6js7g/image/upload/v1706538599/Karussell_25_2021_%C3%96l_und_Acryl_auf_Leinwand_22x30cm_zrojto.jpg)]"
          // style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)"
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
