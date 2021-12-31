import React from "react";
import ColorsUsed from "./ColorsUsed";
import {ExplanationWork} from "../../styled-components/home.style";

function ExplanationWork1() {
  const colors = [
    {
      name: "Burnt Umber",
      className: "burntumber colors",
      id: "BU",
    },
    {
      name: "Crimson Red",
      className: "crimsonred colors",
      id: "CR",
    },
    {
      name: "Burnt Sienna",
      className: "burntsienna colors",
      id: "BS",
    },
    {
      name: "Yellow Ochre",
      className: "yellowochre colors",
      id: "YO",
    },
  ];

  return (
    <ExplanationWork>
      This is a painting of mine which is very close to my heart. I gave in all
      my skills and hardwork into it to make it as special as it is. A child
      sitting by a river, watching her hands and her reflection in water. I
      found the reference image as a photograph on pinterest and decided to
      convert it into painting. Main reasons behind my choice of reference were-
      I wanted to paint a subject which would be universal, which gives good
      feels to anyone, old or young, big or small when he sees it, and another
      reason that whatever it is I wanted that I donot get bored while making
      it. So yes, 1.5 months that I gave in to this work, I was totally involved
      in it, it kept my spirits up all the time. Its been 3 years since I made
      this painting. And all these years people have adored it.
      <p>
        This painting is made in oil colors. Its canvas size is 2 by 2.5 ft. It
        took me an average of 64 hours to make it. Reference photography credits
        to{" "}
        <a
          href="https://www.instagram.com/adriancmurray/"
          target="_blank"
          rel="noreferrer"
        >
          Adrian C. Murray
        </a>
        .
      </p>
      <ColorsUsed colorsUsed={colors} />
    </ExplanationWork>
  );
}

export default ExplanationWork1;
