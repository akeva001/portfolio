import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import SliderImageContent from "./SliderImageContent";
import { SliderData } from "./SliderData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
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
import device from "../../../Assets/Scaling/DisplaySizes.js";

import { motion } from "framer-motion";

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

const ImageBox = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  height: 100%;
`;
const ImageBox2 = styled.div`
  display: flex;

  justify-content: space-evenly;

  padding-bottom: 20px;
  min-width: 50%;
`;
const HeaderContainer = styled.div`
  display: flex;

  justify-content: center;
  font-size: 50px;
  color: black;
  padding: 20px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 35px;
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
const InfoContainer = styled.div`
  color: #fff;
  overflow-anchor: none;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 44px);
  align-self: center;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  margin-bottom: 50px;
  filter: drop-shadow(0 0 0.75rem #bebebe);
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};

    height: ${(props) => (!props.readMore ? "520px" : "100%")};
    padding: 0;
    padding-bottom: 40px;
  }

  overflow: hidden;
  max-width: 1000px;
  align-self: center;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  //background: green;
  width: 100%;

  @media ${device.mobileS} {
    padding: 25px;
  }
  @media ${device.mobileM} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 40px;
  }
  @media ${device.tablet} {
    padding-right: 40px;
  }
  @media ${device.laptop} {
    padding-right: 40px;
    //transform: translate(-30px);
  }
  @media ${device.laptopM} {
    padding-right: 40px;
    //transform: translate(-30px);
  }
  @media ${device.laptopL} {
    padding-right: 50px;
    //transform: translate(-30px);
  }
  @media ${device.desktop} {
    padding-right: 70px;
    //transform: translate(-30px);
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: col2;
  justify-content: center;

  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.laptop} {
    width: 500px;
  }
  @media ${device.laptopL} {
    width: 500px;
  }
  @media ${device.desktop} {
    width: 550px;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
`;
const Slide = styled.div``;
const Slider = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;

  background-color: rgb(242, 242, 242);
  border-radius: 40px;
  margin-bottom: 60px;
  margin-left: 25px;
  margin-right: 25px;

  @media screen and (max-width: 1439px) {
    max-width: 1100px;
  }

  @media screen and (max-width: 900px) {
    max-width: 500px;
  }
`;
const RightArrow = styled.div`
  font-size: 4rem;
  color: black;

  cursor: pointer;
  user-select: none;
  padding-right: 30px;

  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const LeftArrow = styled.div`
  font-size: 4rem;
  color: black;

  cursor: pointer;
  user-select: none;
  padding-left: 30px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin-top: 20px;

  justify-content: space-evenly;
  @media ${device.mobileS} {
    height: 120px;
  }
  @media ${device.mobileM} {
    height: 150px;
  }
  @media ${device.mobileL} {
    height: 200px;
  }
  @media ${device.tablet} {
    height: 150px;
  }
  @media ${device.laptop} {
    height: 150px;
  }
  @media ${device.laptopM} {
    height: 150px;
  }
  @media ${device.laptopL} {
    height: 160px;
  }
  @media ${device.desktop} {
    height: 160px;
  }
`;
const Accomplishments = styled.ul`
  color: black;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 15px;
    width: 120px;
    height: 2100px;
    padding-top: 10px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
    width: 120px;
    height: 150px;
    padding-top: 10px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
    height: 170px;
    width: 170px;
    padding-top: 10px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    width: 170px;
    padding-top: 10px;
    height: 160px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    width: 200px;
    height: 160px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
    width: 200px;
    height: 160px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    width: 170px;
    height: 160px;
  }
`;
const Button = styled.img`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
const Background = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: calc(100vh - 44px);
  width: 100%;
  overflow: hidden;
  transform: scaleX(-1);
  //transform: rotate(180deg);
`;
const ProjectsSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [label, setLabel] = useState("Show more");
  const expand = () => {
    if (readMore == false) {
      setReadMore(true);
      setLabel("Show Less");
      console.log("Form Submitted");
    } else {
      setReadMore(false);
      setLabel("Show Less");
    }
  };
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <InfoContainer id={"projects"}>
        <HeaderContainer>Projects</HeaderContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={1.3}
          centeredSlides
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
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
          {SliderData.map((projects, index) => (
            <SwiperSlide>
              <Slider>
                <Slide key={projects} active={index === current ? true : false}>
                  <InfoRow imgStart={projects.imgStart} readMore={readMore}>
                    <Column1>
                      <TextWrapper>
                        <DescriptionWrapper>
                          <TextContent
                            projectName={projects.projectName}
                            projectYear={projects.year}
                            projectDesc={projects.projectDesc}
                            projectType={projects.projectType}
                            roles={projects.roles}
                            image={projects.image}
                            image2={projects.image2}
                            link={projects.link}
                          />
                        </DescriptionWrapper>
                        <TechWrapper>
                          <Accomplishments>
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                marginBottom: "10px",
                                textDecoration: "underline",
                              }}
                            >
                              Frontend
                            </p>

                            {projects.frontend.map((project, index) => (
                              <li key={index}>{project}</li>
                            ))}
                          </Accomplishments>
                          <Accomplishments>
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                marginBottom: "10px",
                                textDecoration: "underline",
                              }}
                            >
                              Backend
                            </p>
                            {projects.backend.map((project, index) => (
                              <li key={index}>{project}</li>
                            ))}
                          </Accomplishments>
                        </TechWrapper>
                      </TextWrapper>

                      {/* <ImageBox>
                        <LeftArrow>
                          <IoIosArrowDropleft onClick={prevSlide} />
                        </LeftArrow>

                        <RightArrow>
                          <IoIosArrowDropright onClick={nextSlide} />
                        </RightArrow>
                      </ImageBox> */}
                    </Column1>
                    <Column2>
                      {swiperIndex === index ? (
                        <a
                          href={projects.link ? projects.link : null}
                          target="_blank"
                        >
                          <SliderImageContent
                            deviceImages={projects.deviceImages}
                          />
                        </a>
                      ) : (
                        <SliderImageContent
                          deviceImages={projects.deviceImages}
                        />
                      )}
                      {/* <ImageBox2>
                        {projects.image2 != null && (
                          <a
                            style={{
                              display: "table-cell",
                            }}
                            href={projects.link}
                            target="_blank"
                          >
                            <Button src={projects.image} height={"70px"} />
                          </a>
                        )}
                        {projects.image2 != null && (
                          <a
                            style={{
                              display: "table-cell",
                            }}
                            href={projects.link2}
                            target="_blank"
                          >
                            <Button src={projects.image2} height={"70px"} />
                          </a>
                        )}
                      </ImageBox2> */}
                    </Column2>
                    <ReadMore onClick={expand}>{label}</ReadMore>
                  </InfoRow>
                </Slide>
              </Slider>
            </SwiperSlide>
          ))}
        </Swiper>
      </InfoContainer>
    </>
  );
};

export default ProjectsSlider;
