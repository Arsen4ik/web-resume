import { Context } from '../../../Context/MainContext'
import { useContext } from 'react'
import { useEffect, useState } from "react"
// eslint-disable-next-line react/prop-types
const Links = () => {
  const { AboutMeScroll, FetchScroll } = useContext(Context)
  const [areLinksVisible, setAreLinksVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setAreLinksVisible(true), 2500)
  }, [])
  return (
    <section className={`max-h-144 flex flex-col gap-12 pt-16 items-center justify-start tracking-widest font-bold text-2xl
    lg:h-lg-continue
    md:h-md-continue md:min-h-md-continue
    sm:text-xl sm:pt-0 sm:pb-24 sm:gap-6
    `}>
      {(areLinksVisible &&
        <>
          <button className={`group flex flex-row gap-2 animate-bounce-once-2 outline-none`} onClick={AboutMeScroll}>
            <p className={`flex items-center justify-center transition-all ease-in-out duration-300
            lg:group-hover:text-3xl
            `}>Обо мне...</p>
            <img style={{ filter: 'invert(30%)' }} className={`rounded-full border-neutral-800 h-10 w-10 transition-all ease-in-out duration-300 dot-animation
            lg:group-hover:border-4
            sm:h-8 sm:w-8
            `} src="./arrow-down.svg" alt="" />
          </button>
          <button className="group flex flex-row gap-5 animate-bounce-once-3 outline-none" onClick={FetchScroll}>
            <p className={`flex items-center justify-center transition-all ease-in-out duration-300
            lg:group-hover:text-3xl
            `}>Мои проекты...</p>
            <img style={{ filter: 'invert(30%)' }} className={`rounded-full border-neutral-800 h-10 w-10 transition-all ease-in-out duration-300 dot-animation-2
            lg:group-hover:border-4
            sm:h-8 sm:w-8
            `} src="./arrow-down.svg" alt="" />
          </button>
        </>)}
    </section>
  )
}
export default Links