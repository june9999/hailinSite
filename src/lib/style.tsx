import React from "react";

export const Effect1 = () => {
  return (
    <svg className="position:absolute;height:0;clip:rect(0 0 0 0);">
      <defs>
        <filter id="filterRipple">
          <feImage
            x="-95"
            y="-167"
            width="512"
            height="512"
            result="ripple"
          ></feImage>
          <feDisplacementMap
            xChannelSelector="G"
            yChannelSelector="R"
            color-interpolation-filters="sRGB"
            in="SourceGraphic"
            in2="ripple"
            scale="0"
          ></feDisplacementMap>
          <feComposite operator="in" in2="ripple"></feComposite>
          <feComposite in2="SourceGraphic"></feComposite>
        </filter>
      </defs>
    </svg>
  );
};
