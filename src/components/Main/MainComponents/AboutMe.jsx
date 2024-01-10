import { Context } from '../../../Context/MainContext'
import { useContext } from 'react'
import { aboutMe, myStack, contacts } from '../../../scripts/aboutMeInfo'

import apple from '../Media/contacts/apple.svg'
import github from '../Media/contacts/github.svg'
import phone from '../Media/contacts/phone.svg'
import telegram from '../Media/contacts/telegram.svg'
import vk from '../Media/contacts/vk.svg'
import yandex from '../Media/contacts/yandex.svg'


// eslint-disable-next-line react/prop-types
const AboutMe = () => {
    // const [spaceNum, setSpaceNum] = useState(2)
    const { spaceImg, spaceNum, aboutMeRef } = useContext(Context)

    // console.log(spaceImg);
    return (
        <section id="AboutMe"
            style={{
                // backgroundImage: `url(../Media/spaces/space${spaceNum}_img/space${spaceNum}_lg.jpg)`,
                backgroundImage: `url(${spaceImg})`,
            }}
            className={
                `w-full bg-slate-300 bg-cover bg-center
            lg:min-h-screen lg:h-auto
            md:min-h-screen md:h-auto
            `}
            ref={aboutMeRef}
        >
            <div
                style={{ backgroundImage: 'linear-gradient(to top right, rgba(0,0,0,0) 15%, #9233ea3e 22%, #9233ea88 30% 50%, #f59f0b89 50% 70%, #f59f0b40 78%, rgba(0,0,0,0) 85%)' }}
                className={`w-full h-full grid text-white
                lg:grid-cols-[2fr_1fr] lg:grid-rows-[4fr_5fr] lg:p-16 lg:gap-12 lg:gap-y-4
                md:grid-cols-2 md:grid-rows-2 md:p-12 md:gap-6 md:gap-y-4 md:min-h-screen md:h-auto
                `}>
                <div className={`shadow-2xl backdrop-blur-sm rounded-2xl flex flex-col p-10
                lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2 lg:gap-6
                md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 md:gap-3
                `}>
                    <h1 className={`font-bold
                    lg:text-5xl
                    md:text-3xl
                    `}>Фазлеев Арсен</h1>
                    {
                        aboutMe.map(data => (
                            <h2 key={data[0]} className=" text-xl">
                                <span className=" font-light text-base italic">{data[1]}</span>
                                {data[2]}
                            </h2>
                        ))
                    }
                    <p><span className=" font-light italic">Обо мне:</span><br />Ищу работу/стажировку, чтобы получить практический опыт работы и прокачать свои навыки фронтенд разработчика. Готов учиться, адаптироваться и внести свой вклад в команду. Моя цель - стать высококвалифицированным специалистом в области фронтенд разработки и внести вклад в развитие инновационных проектов.</p>
                </div>
                <div className={`flex flex-col
                lg:justify-between
                md:justify-start
                `}>
                    <h1 className={`text-center font-bold
                    lg:my-auto lg:text-3xl
                    md:my-10 md:text-2xl
                    `}>Мой стек:</h1>
                    <ul className={`flex flex-row flex-wrap gap-y-3 gap-x-4
                    lg:justify-end
                    md:justify-start
                    `}>
                        {
                            myStack.map(data => (
                                <li key={data[0]}
                                    className="backdrop-blur-xl rounded-2xl p-2 px-4 backdrop-brightness-125">{data[1]}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`flex flex-col
                lg:justify-between
                md:justify-start
                `}>
                    <h1 className={`text-center font-bold
                    lg:my-auto lg:text-3xl
                    md:my-10 md:text-2xl
                    `}>Как со мной связаться:</h1>
                    <ul className={`flex flex-col items-center gap-3 text-lg font-Mooli
                    lg:justify-center
                    md:justify-end
                    `}>
                        {
                            contacts.map(data => {
                                let image;
                                if (data[2] === 'apple') image = apple
                                else if (data[2] === 'github') image = github
                                else if (data[2] === 'phone') image = phone
                                else if (data[2] === 'telegram') image = telegram
                                else if (data[2] === 'vk') image = vk
                                else image = yandex
                                return (
                                    <li key={data[0]} className="p-2 px-4 w-full text-center underline transition-all ease-in-out duration-100 hover:backdrop-blur-xl hover:rounded-2xl hover:backdrop-brightness-125">
                                        <a href={data[1]} target="_blank" rel="noreferrer"
                                            className="flex flex-row items-center justify-center gap-2">
                                            <img className=" h-5 invert" src={image} alt="" />
                                            <p>{data[3]}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
