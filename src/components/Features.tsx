import React from "react";
import FeaturedItems from "bwad-react-designsystem/dist/FeaturedItems";
import SvgBriefcase from "assets/images/briefcase.svg";
import SvgCodesandbox from "assets/images/codesandbox.svg";
import SvgUsers from "assets/images/users.svg";
import SvgGlobe from "assets/images/globe.svg";
import Image from "next/image";

type Props = {};

function Features({}: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <h3 className="text-green uppercase font-semibold mb-2">
          OUR SUPER BENEFITS
        </h3>
        <h2 className="text-navy font-semibold text-[30px] mb-10">
          Learn Faster & Better
        </h2>
      </div>

      <FeaturedItems
        features={[
          {
            icon: <Image src={SvgGlobe} alt="globe" />,
            key: "diversity",
            paragraph:
              "Learn from anyone around the world and get a new skills",
            title: "Diversity",
          },
          {
            icon: <Image src={SvgCodesandbox} alt="codesandbox" />,
            key: "guideline",
            paragraph:
              "Lara will help you to choose       which path that suitable for you",
            title: "A.I Guideline",
          },
          {
            icon: <Image src={SvgUsers} alt="users" />,
            key: "mentoring",
            paragraph:
              "We will ensure that you will get      what you really do need",
            title: "1-1 Mentoring",
          },
          {
            icon: <Image src={SvgBriefcase} alt="briefcase" />,
            key: "future-job",
            paragraph:
              "Get your dream job in your dream      company together with us",
            title: "Future Job",
          },
        ]}
      />
    </section>
  );
}

export default Features;
