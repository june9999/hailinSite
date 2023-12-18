import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <p>Adam Lee is an Australian artist from Melbourne, Australia.</p>
        <p>
          {`Adam Lee’s vast landscapes aren’t really landscapes, just as his
          portraits aren’t really portraits. It might seem a trite proposition,
          but it’s one worth making. Describing Lee’s paintings purely in terms
          of representation – either straight or stylised – is missing the
          point. At once lithe and laboured, these lush, dense and fluid scenes,
          vistas, orbs and figures belong to a wider, more allegorical and
          atmospheric kind. They are memories and imaginings, ancient and
          enveloping. — Dan Rule, September 2012 The world building which Adam
          Lee has undertaken over much of his artistic oeuvre seems to have
          perpetuated its own fictionalised reality, from the time of the cradle
          of civilisation, in a Mesopotamian oasis 300 B.C.-cum-third century
          A.D. land that exists somewhere between two ‘Greats’. That of
          Alexander the Great, King of the Greek Empire, and Anthony the Great,
          Christian Saint and hermit leader of The Desert Fathers. Though in
          Lee’s fiction, both Greats inhabit the same time: the Christian
          hermits, and the cities and structures before Christianity, rest in
          this world of fluid colourful motion. The Mesopotamian Tower of Babel,
          with its conjectural origin as the Etemenaki ziggurat of Babylon,
          stands in this world with a ‘purple haze’ sky, whilst contemplative
          hermits sit in caves thinking radioactive thoughts. — Jack Willet,
          February 2015`}
        </p>
      </div>
      <div>{/* <Image src="/" alt="personal image" /> */}</div>
    </div>
  );
};

export default About;
