import Title from "./AboutSiteComponents/Title";
import descriptionTexts from '../../scripts/descriptionTexts'
import { Context } from "../../Context/AboutSiteContext";
import { useState } from "react";
import Technologies from "./AboutSiteComponents/Technologies";
const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState(descriptionTexts)
  const [technologyChosed, setTechnologyChosed] = useState(null)
  const someTechnologyChosed = (ID = null, image = null) => {
    const choosingTechnology = datas.findIndex(el => el.id === ID)
    setTechnologyChosed({ data: datas[choosingTechnology], image })
  }
  return (
    <Context.Provider value={{ datas, setDatas, technologyChosed, setTechnologyChosed, someTechnologyChosed }}>
      <Title />
      <Technologies />
    </Context.Provider>
  );
};
export default About;
