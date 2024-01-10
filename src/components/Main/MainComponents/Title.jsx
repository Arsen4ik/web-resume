import { Context } from '../../../Context/MainContext'
import { useContext } from 'react'
import { useEffect, useState } from "react"
// eslint-disable-next-line react/prop-types
const Title = () => {
    const { spaceImg, spaceNum } = useContext(Context)
    const text = 'веб-резюме'
    const [bgIndexed, setBgIndexed] = useState(-1)
    useEffect(() => {
        let cnt = 0
        setTimeout(() => {
            const titleTimer = setInterval(() => {
                // console.log(bgIndexed);
                setBgIndexed(prev => prev + 1)
                ++cnt
                if (cnt === text.length) {
                    clearInterval(titleTimer)
                }
            }, 150)
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <h1 className={`py-20 font-bold text-center animate-bounce-once
        lg:text-5xl
        md:text-3xl
        sm:text-xl
        `}>
            Мой&nbsp;{
                text.split('').map((letter, ind) => <span key={ind}
                    style={{ backgroundImage: (bgIndexed >= ind && `url(${spaceImg})`), backgroundPositionX: `${ind * 2}rem` }}
                    className={"sm:text-3xl md:text-6xl lg:text-9xl transition-all ease-in-out duration-100 " + (bgIndexed >= ind ? 'text-gradient bg-cover' : 'text-white my-text')}>{letter}</span>)
            }&nbsp;сайт
        </h1>
    )
}
export default Title