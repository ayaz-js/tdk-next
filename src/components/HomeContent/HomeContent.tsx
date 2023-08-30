import { FC } from "react";
import { Lead } from "./sections/Lead";
import { AboutUs } from "./sections/AboutUs";
import { Gallery } from "./sections/Gallery";
import { OurService } from "./sections/OurService";

export const HomeContent: FC = () => {
  return (
    <>
      <Lead />
      <AboutUs />
      <Gallery />
      <OurService />
    </>
  );
};
