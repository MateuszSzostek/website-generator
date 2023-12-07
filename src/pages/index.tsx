import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Landing1 from "../modules/landing/1/Landing1";
import Landing2 from "../modules/landing/2/Landing2";
import Hero1 from "../modules/hero/Hero1";
import Cards1 from "../modules/cards/Cards1";
import Cards2 from "../modules/cards/Cards2";
import Cards3 from "../modules/cards/Cards3";
import Cards4 from "../modules/cards/Cards4";
import People1 from "../modules/people/People1";
import People2 from "../modules/people/People2";
import People3 from "../modules/people/People3";
import Pricing1 from "../modules/pricing/Pricing1";
import Pricing2 from "../modules/pricing/Pricing2";
import Pricing3 from "../modules/pricing/Pricing3";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Landing1 />
      <Landing2 />
      <Hero1 />
      <Cards1 />
      <Cards2 />
      <Cards3 />
      <Cards4 />
      <People1 />
      <People2 />
      <People3 />
      <Pricing1 />
      <Pricing2 />
      <Pricing3 />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
