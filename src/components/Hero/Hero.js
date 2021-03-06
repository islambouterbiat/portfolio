import React from "react";
import Image from "next/image";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, PhotoDiv } from "./HeroStyles";
// import my_pic from "";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <PhotoDiv>
        <Image
          src="/images/my_pic.jpg"
          height={200}
          width={200}
          alt="Islam Bouterbiat photo"
          className="profile_pic"
        />
      </PhotoDiv>
      <SectionTitle main center>
        Welcome to <br />
        Islam Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full-stack developer with more than 2 and a half years of
        experience, my main focus is to translate the customer needs to code, It
        amazes me to work with a creative team who is willing to think outside
        of the box, solves real business problems, pushes the boundaries and
        keps growing up the business, and eventually of course, satisfies the
        customer.
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
