import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Islam Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer who specializes in javascript tachnologies
        across the whole stack (react.js, node.js, express). experience building
        complete web applications with backend API systems
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/islambouterbiat/", "_blank")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
