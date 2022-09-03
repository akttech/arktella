import Image from "next/image";
import { PrimaryButton } from "../../components/Button";
import { Paragraph, ParagraphCenter } from "../../Tokens/Paragraph";
import HeroImg1 from "../../assets/images/hero-img-1.svg";
import { H3 } from "../../Tokens/Heading";
import { Container_center } from "../../Tokens/Container.center";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row mt-8">
      <Container_center>
        <HeroImg imgSrc={HeroImg1} imgWidth={500} imgHeight={500} />
      </Container_center>

      <div className="space-y-4">
        <H3 style="text-center sm:text-left">
          Scale up your bussiness With us
        </H3>
        <ParagraphCenter>
          With Arktella, you get all the services you need to bring you business
          to the digital world.
        </ParagraphCenter>
        <Container_center>
          <PrimaryButton size="large">Start a Project</PrimaryButton>
        </Container_center>
      </div>
    </div>
  );
};

export default Hero;

const HeroImg = ({
  imgContainerStyle,
  imgSrc,
  imgStyle,
  imgWidth,
  imgHeight,
}) => {
  return (
    <>
      <Image
        src={imgSrc}
        alt="hero-img-1"
        className={imgStyle}
        width={imgWidth}
        height={imgHeight}
      />
    </>
  );
};
