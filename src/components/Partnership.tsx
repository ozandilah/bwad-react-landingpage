import React from "react";
import Image from "next/image";
import LogoApple from "assets/images/apple.svg";
import LogoAdobe from "assets/images/adobe.svg";
import LogoSlack from "assets/images/slack.svg";
import LogoSpotify from "assets/images/spotify.svg";
import LogoGoogle from "assets/images/google.svg";

type Props = {};

function Partnership({}: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 md:gap-x-6 xl:gap-x-12">
        <div className="w-auto">
          <Image src={LogoApple} alt="Logo Apple"></Image>
        </div>
        <div className="w-auto">
          <Image src={LogoAdobe} alt="Logo Apple"></Image>
        </div>
        <div className="w-auto">
          <Image src={LogoSlack} alt="Logo Apple"></Image>
        </div>
        <div className="w-auto">
          <Image src={LogoSpotify} alt="Logo Apple"></Image>
        </div>
        <div className="w-auto">
          <Image src={LogoGoogle} alt="Logo Apple"></Image>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
