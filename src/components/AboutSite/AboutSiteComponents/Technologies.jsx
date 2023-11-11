import Description from "./Description";
import Technology from "./Technology";
import { Context } from '../../../Context/AboutSiteContext'
import { useContext } from 'react'
const Technologies = () => {
    const { technologyChosed, someTechnologyChosed, datas } = useContext(Context)
    return (
        <>
            <h2 className="text-center pt-12 text-2xl font-bold text-neutral-600 ">
                Использовались следующие технологии:
            </h2>
            <section
                className={
                    technologyChosed ?
                        "max-h-technologies h-technologies justify-self-center grid grid-cols-[1fr_3fr_5fr] grid-rows-4 mx-auto p-technologies2 py-8 gap-y-4 max-w-technologies2" :
                        `max-h-technologies h-technologies p-technologies
            flex flex-wrap flex-row justify-center content-start gap-16 gap-x-32 pt-24
             `
                }
            >
                {
                    technologyChosed ?
                        <>
                            {datas.map(el => el.id !== technologyChosed.id && <Technology key={el.id} data={el} someTechnologyChosed={someTechnologyChosed} technologyChosed={technologyChosed} />)}
                            <div onClick={someTechnologyChosed} className="group row-start-1 row-end-5 col-start-2 col-end-3 lg:w-56 lg:h-56 md:w-44 md:h-44
                self-center justify-self-center border-solid border-4 rounded-full p-5 border-stone-300 hover:border-red-600
                hover:p-4 transition-all ease-in-out duration-300 cursor-none">
                                <img src={technologyChosed.img} className="" alt="" />
                                <button className=" group-hover:border-red-600 transition-all ease-in-out duration-300
                   bg-slate-50 border-4 border-stone-300 w-12 h-12 rounded-full relative lg:left-40 lg:bottom-56 md:left-32 md:bottom-44">❌</button>
                            </div>
                            <div className="w-4/5 h-4/5 row-start-1 row-end-5 col-start-3 col-end-4 bg-slate-50 shadow-xl rounded-2xl self-center justify-self-end p-5 flex flex-col justify-start text-neutral-600 max-h-description_card gap-5"><Description technologyChosed={technologyChosed} /></div>
                        </> :
                        datas.map(el => <Technology key={el.id} data={el} someTechnologyChosed={someTechnologyChosed} />)
                }

            </section>
        </>
    )
}
export default Technologies