import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import GooglePlayImage from "../../../Assets/Images/Sites/GooglePlay2.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import AutioLogo from "../../../Assets/Images/Sites/Autio.png";
import LoopLogo from "../../../Assets/Images/Sites/Loop Logo TM Centered.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import FoodImage from "../../../Assets/Images/FoodRecipeEngine/Food.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { EffectFade } from "swiper";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
import { EffectCards } from "swiper";

const svgVariants = {
  //hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
]);
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const Background = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  //min-height: calc(100vh - 44px);
  width: 100%;
  overflow: hidden;
  //transform: rotate(180deg);
  transform: rotate(180deg);
  z-index: -1;
  svg {
    height: 50vw !important;
    @media ${device.mobileS} {
      height: 180vw !important;
    }
    @media ${device.mobileM} {
      height: 180vw !important;
    }
    @media ${device.mobileL} {
      height: 150vw !important;
    }
    @media ${device.tablet} {
      height: 80vw !important;
    }
    @media ${device.laptop} {
    }
    @media ${device.laptopL} {
    }
    @media ${device.desktop} {
      height: 60vw !important;
    }
  }
`;
const Gradient = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  z-index: 100;
  @media ${device.mobileS} {
    height: 100px;
  }
  @media ${device.mobileM} {
    height: 100px;
  }
  @media ${device.mobileL} {
    height: 100px;
  }
  @media ${device.tablet} {
    height: 100px;
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktop} {
  }
`;
const Gradient2 = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #fff);
  z-index: 100;
  @media ${device.mobileS} {
    height: 100px;
  }
  @media ${device.mobileM} {
    height: 100px;
  }
  @media ${device.mobileL} {
    height: 100px;
  }
  @media ${device.tablet} {
    height: 100px;
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktop} {
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: black;
  //padding: 20px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  transform: translate(0, 10px);
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 35px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 80px;
  }
`;
const SiteWrapper = styled.div`
  //position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: black;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-right: 0px;
  }

  a {
    text-align: center;
  }
`;
const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 24px);
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  overflow: hidden;
  svg {
    height: calc(100vh - 230px);
    //width: 100vw;
    overflow: visible;
    stroke: rgb(242, 242, 242);
    stroke-width: 8;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(242, 242, 242);
  max-width: 800px;
  border-radius: 40px;
  box-sizing: border-box;
  margin-bottom: 60px;
  margin-top: 30px;
  //overflow: hidden;
  //width: 100%;
  @media screen and (max-width: 1439px) {
    max-width: 850px;
  }
  @media screen and (max-width: 900px) {
    max-width: 500px;
  }
  filter: drop-shadow(0 0 0.75rem #bebebe);
`;
const InfoRow = styled.div`
  display: grid;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    height: ${(props) => (!props.readMore ? "520px" : "100%")};
    position: relative;
    max-height: 100%;
    overflow: hidden;
    padding: 0px;
    margin-bottom: 0px;
    //transition: max-height 0.15s ease-out;
  }
  overflow: hidden;
  align-self: center;
  width: 80vw;
`;
const Divider = styled.span`
  height: 100%;
  width: 1;
  backgroundcolor: "#909090";
`;
const Column1 = styled.div`
  display: flex;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  width: 100%;
  ::after {
    content: "";
    width: 0;
    height: 100%;
    border: 1px solid black;
    opacity: 0.2;
    margin-left: 30px;

    @media screen and (max-width: 900px) {
      height: 0;
      margin-left: 0px;
    }
  }
  @media ${device.mobileS} {
    padding: 25px;
  }
  @media ${device.mobileM} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 30px;
  }
  @media ${device.tablet} {
    padding: 40px;
    padding-right: 10px;
  }
  @media ${device.laptop} {
    padding: 40px;
    padding-right: 10px;
  }
  @media ${device.laptopM} {
    padding: 40px;
    padding-right: 10px;
  }
  @media ${device.laptopL} {
    padding-left: 50px;
    padding-right: 10px;
  }
  @media ${device.desktop} {
    padding: 50px;
    padding-right: 10px;
  }
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  width: 100%;
`;
const Accomplishments = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 20px;
  font-size: 17px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
const Button = styled.img`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const FrameWrapper = styled.div`
  display: flex;
  iframe {
    width: 100%;
    height: 800px;
  }

  border: 0;
  -ms-transform: scale(0.75);
  -moz-transform: scale(0.75);
  -o-transform: scale(0.75);
  -webkit-transform: scale(0.75);
  transform: scale(0.75);

  // -ms-transform-origin: 0 0;
  // -moz-transform-origin: 0 0;
  // -o-transform-origin: 0 0;
  // -webkit-transform-origin: 0 0;
  // transform-origin: 0 0;

  position: absolute;
  z-index: 3;
`;
const Site = styled.img`
  width: 280px;
  margin: 30px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:hover ${FrameWrapper} {
    display: none;
  }
  @media ${device.mobileM} {
    width: 220px;
  }
  @media ${device.mobileL} {
    width: 220px;
  }
`;
const ReadMore = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 80px;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 16px;
    padding-top: 40px;
    background-image: linear-gradient(to bottom, transparent, white);
    cursor: pointer;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
  }
`;

const Experience = ({ motion, scrollYProgress, pathLength }) => {
  const [readMore, setReadMore] = useState(false);
  const [label, setLabel] = useState("Show More");
  const [swiperIndex, setSwiperIndex] = useState(0);

  const expand = () => {
    if (readMore == false) {
      setReadMore(true);
      setLabel("Show Less");
      console.log("Form Submitted");
    } else {
      setReadMore(false);
      setLabel("Show More");
    }
  };

  const experienceDetails = [
    {
      projectName: "East of Western",
      year: "  • Oct 2021 - Present",
      projectDesc:
        "East of Western is a creative agency based in Los Angeles, CA. We design digital experiences for creative people and brands.",
      projectType: "iOS/Android App",
      roles: ["Front End Developer"],
      //image: AppStoreImage,
      //image2: GooglePlayImage,
      //deviceImages: [AutioLogo],
      sites: [AutioLogo, LoopLogo],

      link: ["https://www.autio.com", "https://loop.tv"],
      imgStart: false,
      extrapadding: true,
      accomplishments: [
        "Built and maintained 10+ web applications using NextJS framework based on approved designs",
        "Worked alongside 3 peers and several clients to meet project requirements, and desired functionality",
        "Tested and optimized 30+ React components for best performance across every device and browser",
        "Assessed UI/UX designs for technical feasibility",
      ],
      hasLinks: false,
    },
    {
      projectName: "MyCampusMate",
      year: "  • July 2019 - Oct 2021",
      projectDesc:
        "RMate is a mobile application aimed at organizing and optimizing your access to student tools. RMate is intended for students enrolled at University of California, Riverside. ",
      projectType: "iOS/Android App",
      roles: ["Mobile Developer"],

      image2: GooglePlayImage,
      deviceImages: [RMateImage2],
      sites: [null, null],
      link2:
        "https://play.google.com/store/apps/details?id=com.mycampusmate.rmate&hl=en_US&gl=US",
      imgStart: false,
      extrapadding: true,
      accomplishments: [
        "Collaborated with Senior developers to deliver 15+ user-friendly features using React Native",
        "Structured reusable UI components based on custom design specifications in order to optimize coding eﬀiciency",
        "Tested all new features and reduced the number of crashes and bugs by 80%",
        "Utilized Redux library for state management of components",
      ],
      hasLinks: true,
    },
  ];

  return (
    <>
      <InfoContainer id={"experience"}>
        <Background>
          <Gradient></Gradient>
          <Gradient2></Gradient2>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="500 800 1000 400"
            variants={svgVariants}
            initial="hidden"
            //animate="visible"
            transition={{
              x: { type: "spring", stiffness: 100 },
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* <rect fill="lime" width="100%" height="100%" /> */}
            <motion.path
              fill="none"
              d="M891.64,763.34c3.96-3.48,6.47-8.57,6.47-14.26c0-10.49-8.5-18.99-18.99-18.99c-7.5,0-13.97,4.36-17.05,10.68
              h-71.66l-113.83,313.11h211.21c3.28,5.71,9.41,9.56,16.47,9.56c10.49,0,18.99-8.5,18.99-18.99c0-8.28-5.31-15.31-12.71-17.9
              L836.92,824.1l-49.75,136.81c-0.48-0.04-0.96-0.07-1.45-0.07c-10.49,0-18.99,8.5-18.99,18.99s8.5,18.99,18.99,18.99
              s18.99-8.5,18.99-18.99c0-5.15-2.06-9.81-5.38-13.23l37.6-102.97l59.48,163.55c-5.38,2.45-9.42,7.33-10.7,13.24H695.84
              L799.9,754.25h60.96c2.24,7.93,9.48,13.75,18.1,13.82l172.97,475.31h-46.37c-1.52-8.96-9.3-15.79-18.7-15.79
              c-1.19,0-2.35,0.12-3.47,0.33L941,1110.8H655.7l-53.05,146.05h91.33l19.61-54.03c10.07-0.47,18.1-8.76,18.1-18.94
              c0-10.49-8.5-18.99-18.99-18.99c-10.49,0-18.99,8.5-18.99,18.99c0,5.99,2.78,11.33,7.12,14.81l-16.35,44.7h-62.56l43.27-119.11
              h266.35l40.15,110.94c-2.38,3.17-3.81,7.1-3.81,11.37c0,10.49,8.5,18.99,18.99,18.99c6.7,0,12.58-3.48,15.96-8.72h68.36
              L891.64,763.34z"
              variants={pathVariants}
              style={{ pathLength }}
            />
            <motion.path
              fill="none"
              d="M1009.63,754.24h61.18v110.57c-6.99,2.8-11.94,9.63-11.94,17.62c0,10.49,8.5,18.99,18.99,18.99
              s18.99-8.5,18.99-18.99c0-8.23-5.24-15.21-12.56-17.85v-123.8h-88.12v231.51l13.46,37V754.24z"
              variants={pathVariants}
              style={{ pathLength }}
            />
            <motion.path
              fill="none"
              d="M1397.35,1256.84l-221.2-257.13c1.59-2.78,2.51-5.98,2.51-9.41c0-4.64-1.67-8.89-4.43-12.18l176.57-205.16
                  c9.93-0.62,17.79-8.85,17.79-18.93c0-10.49-8.5-18.99-18.99-18.99c-5.33,0-10.14,2.2-13.59,5.74h-69.89L1070.8,968.44v178.82
                  c-6.99,2.8-11.94,9.63-11.94,17.62c0,10.49,8.5,18.99,18.99,18.99s18.99-8.5,18.99-18.99c0-8.23-5.24-15.21-12.56-17.85V973.4
                  l187.83-219.15h58.52c0.06,5.61,2.55,10.62,6.47,14.05l-175,203.19c-0.8-0.1-1.6-0.17-2.43-0.17c-10.49,0-18.99,8.5-18.99,18.99
                  c0,10.49,8.5,18.99,18.99,18.99c2.11,0,4.13-0.36,6.02-0.99l202.33,235.08h-64.39c-2.92-6.74-9.62-11.46-17.43-11.46
                  c-2,0-3.92,0.31-5.72,0.88l-115.3-134.99c1.66-2.82,2.62-6.09,2.62-9.6c0-10.49-8.5-18.99-18.99-18.99
                  c-10.49,0-18.99,8.5-18.99,18.99s8.5,18.99,18.99,18.99c2.01,0,3.94-0.32,5.75-0.89l115.44,134.72c-1.76,2.88-2.79,6.25-2.79,9.87
                  c0,10.49,8.5,18.99,18.99,18.99c8.42,0,15.54-5.48,18.03-13.06H1397.35z"
              variants={pathVariants}
              style={{ pathLength }}
            />
          </motion.svg>
        </Background>

        <HeaderContainer>Experience</HeaderContainer>
        {/* <button class="custom_next">Custom Next Btn</button>
          <button class="custom_prev">Custom Next Btn</button> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1.3}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          autoplay
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 350,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
          slideToClickedSlide={true}
          onClick={function (swiper) {
            console.log(swiper.clickedIndex, swiper.clickedSlide);
          }}
          onActiveIndexChange={(swiperCore) => {
            setSwiperIndex(swiperCore.activeIndex);
          }}
        >
          {experienceDetails.map((experiences, index) => (
            <SwiperSlide>
              <InfoWrapper key={experiences}>
                {/* <FrameWrapper>
                    <iframe
                      src="https://www.autio.com"
                      width="500px"
                      height="500px"
                    ></iframe>
                  </FrameWrapper> */}

                <InfoRow imgStart={experiences.imgStart} readMore={readMore}>
                  <Column1>
                    <TextWrapper>
                      <TextContent
                        projectName={experiences.projectName}
                        projectYear={experiences.year}
                        projectDesc={experiences.projectDesc}
                        projectType={experiences.projectType}
                        roles={experiences.roles}
                        image={experiences.image}
                        link={experiences.link}
                      />
                      <Accomplishments>
                        <li>
                          {experiences.accomplishments.map((item) => (
                            <li>{item}</li>
                          ))}
                        </li>
                      </Accomplishments>
                      {experiences.hasLinks === true ? (
                        <ImageBox>
                          {/* <a
                            style={{
                              display: "table-cell",
                              //orderRadius: "40px",
                              boxSizing: "border-box",
                              //boxShadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2),
                            }}
                            href={experiences.link}
                            target="_blank"
                          >
                            <Button src={experiences.image} height={"60px"} />
                          </a> */}
                          {/* <a
                            style={{ display: "table-cell" }}
                            href={experiences.link2}
                            target="_blank"
                          >
                            <Button src={experiences.image2} height={"60px"} />
                          </a> */}
                        </ImageBox>
                      ) : null}
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    {swiperIndex === index ? (
                      <a href={experiences.link2} target="_blank">
                        <ImageContent deviceImages={experiences.deviceImages} />
                      </a>
                    ) : (
                      <ImageContent deviceImages={experiences.deviceImages} />
                    )}
                    {experiences.sites[0] && swiperIndex === index && (
                      <SiteWrapper>
                        {/* <h2>Some fun projects:</h2> */}

                        <a
                          style={{ display: "table-cell" }}
                          href={experiences.link[0]}
                          target="_blank"
                        >
                          <Site src={experiences.sites[0]} />
                        </a>
                        <a
                          style={{ display: "table-cell" }}
                          href={experiences.link[1]}
                          target="_blank"
                        >
                          <Site src={experiences.sites[1]} />
                        </a>
                      </SiteWrapper>
                    )}
                    {experiences.sites[0] && swiperIndex != index && (
                      <SiteWrapper>
                        {/* <h2>Some fun projects:</h2> */}

                        <a
                          style={{ display: "table-cell" }}
                          href={experiences.link[0]}
                          target="_blank"
                        >
                          <Site src={experiences.sites[0]} />
                        </a>
                        <a
                          style={{ display: "table-cell" }}
                          href={experiences.link[1]}
                          target="_blank"
                        >
                          <Site src={experiences.sites[1]} />
                        </a>
                      </SiteWrapper>
                    )}
                  </Column2>
                  <ReadMore onClick={expand}>{label}</ReadMore>
                </InfoRow>
              </InfoWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </InfoContainer>
    </>
  );
};
export default Experience;
