// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useRef } from "react";
import AboutMe from "./MainComponents/AboutMe";
import MyProjects from "./MainComponents/MyProjects";
import Footer from "./MainComponents/Footer";
import Links from "./MainComponents/Links";
import Title from "./MainComponents/Title";
import { Context } from "../../Context/MainContext";

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

  return (
    <Context.Provider value={{ spaceNum, AboutMeScroll, FetchScroll, aboutMeRef, fetchRef }}>
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