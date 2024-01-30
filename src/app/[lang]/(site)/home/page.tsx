import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap">
      <div className="md:w-[50%] md:pt-[7rem] md:px-[3rem]">
        <h1 className="text-4xl md:text-8xl tracking-tighter">RECENT DESIGN</h1>
        <p className="py-[1rem] md:px-[3rem] md:pt-[5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          distinctio iusto soluta illum eum, commodi id officia temporibus et
          voluptates ut asperiores reiciendis delectus minima, voluptas possimus
          minus dolorem quibusdam!
        </p>
      </div>
      <div className="flex relative md:w-[50%] md:pt-[10rem] md:px-[3rem]">
        <img
          className="w-[30rem] pt-[2rem]"
          src="https://res.cloudinary.com/dcfs6js7g/image/upload/v1706538599/Karussell_25_2021_%C3%96l_und_Acryl_auf_Leinwand_22x30cm_zrojto.jpg"
          alt="try"
        />
      </div>
      <div className="flex pt-[2rem] md:pl-[10rem] gap-x-[7rem] md:relative md:top-[-7rem] ">
        <Link
          href="/works"
          className="flex font-3xl border-4 border-solid border-black w-[10rem] items-center h-[3rem] justify-center md:left-[10rem] "
        >
          See More
        </Link>
        <img
          className="h-[50px]"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
          alt="long-arrow-right--v1"
        />
      </div>
    </div>
  );
};

export default page;
