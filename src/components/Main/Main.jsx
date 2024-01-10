// eslint-disable-next-line no-unused-vars
import { useEffect, useRef, useState } from "react";
import AboutMe from "./MainComponents/AboutMe";
import MyProjects from "./MainComponents/MyProjects";
import Footer from "./MainComponents/Footer";
import Links from "./MainComponents/Links";
import Title from "./MainComponents/Title";
import { Context } from "../../Context/MainContext";


import space1_lg from './Media/spaces/space1_img/space1_lg.jpg'
import space1_md from './Media/spaces/space1_img/space1_md.jpg'
import space1_sm from './Media/spaces/space1_img/space1_sm.jpg'

import space2_lg from './Media/spaces/space2_img/space2_lg.jpg'
import space2_md from './Media/spaces/space2_img/space2_md.jpg'
import space2_sm from './Media/spaces/space2_img/space2_sm.jpg'

import space3_lg from './Media/spaces/space3_img/space3_lg.jpg'
import space3_md from './Media/spaces/space3_img/space3_md.jpg'
import space3_sm from './Media/spaces/space3_img/space3_sm.jpg'

import space4_lg from './Media/spaces/space4_img/space4_lg.jpg'
import space4_md from './Media/spaces/space4_img/space4_md.jpg'
import space4_sm from './Media/spaces/space4_img/space4_sm.jpg'

import space5_lg from './Media/spaces/space5_img/space5_lg.jpg'
import space5_md from './Media/spaces/space5_img/space5_md.jpg'
import space5_sm from './Media/spaces/space5_img/space5_sm.jpg'

import space6_lg from './Media/spaces/space6_img/space6_lg.jpg'
import space6_md from './Media/spaces/space6_img/space6_md.jpg'
import space6_sm from './Media/spaces/space6_img/space6_sm.jpg'

import space7_lg from './Media/spaces/space7_img/space7_lg.jpg'
import space7_md from './Media/spaces/space7_img/space7_md.jpg'
import space7_sm from './Media/spaces/space7_img/space7_sm.jpg'

import space8_lg from './Media/spaces/space8_img/space8_lg.jpg'
import space8_md from './Media/spaces/space8_img/space8_md.jpg'
import space8_sm from './Media/spaces/space8_img/space8_sm.jpg'

const Main = () => {
  const spaceNum = Math.ceil(Math.random() * 8)

  const aboutMeRef = useRef()
  const fetchRef = useRef()

  function AboutMeScroll() {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function FetchScroll() {
    fetchRef.current.scrollIntoView({ behavior: 'smooth' })
  }


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const size = windowWidth > 500 ? windowWidth > 900 ? 'lg' : 'md' : 'sm'
  // const spaceImgPath = `../spaces/space${spaceNum}_img/space${spaceNum}_${size}.jpg`
  // const spaceImg = windowWidth > 500 ? windowWidth > 900 ?  : 'md' : 'sm'
  let spaceImg;
  if (spaceNum === 1) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space1_lg : space1_md : space1_sm
  else if (spaceNum === 2) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space2_lg : space2_md : space2_sm
  else if (spaceNum === 3) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space3_lg : space3_md : space3_sm
  else if (spaceNum === 4) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space4_lg : space4_md : space4_sm
  else if (spaceNum === 5) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space5_lg : space5_md : space5_sm
  else if (spaceNum === 6) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space6_lg : space6_md : space6_sm
  else if (spaceNum === 7) spaceImg = windowWidth > 500 ? windowWidth > 900 ? space7_lg : space7_md : space7_sm
  else spaceImg = windowWidth > 500 ? windowWidth > 900 ? space8_lg : space8_md : space8_sm


  return (
    <Context.Provider value={{ spaceImg, AboutMeScroll, FetchScroll, aboutMeRef, fetchRef }}>
      <main className=" text-neutral-600">
        <Title />
        <Links />
        <AboutMe />
        <MyProjects />
        <Footer />
      </main>
    </Context.Provider>
  )
}
export default Main