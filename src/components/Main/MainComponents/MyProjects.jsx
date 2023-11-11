import { Context } from '../../../Context/MainContext'
import { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import searchedRepos from "../../../scripts/fetch";

// eslint-disable-next-line react/prop-types
const MyProjects = () => {
    const { fetchRef } = useContext(Context)
    const gitName = 'Arsen4ik'
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`https://api.github.com/users/${gitName}/repos?per_page=45`).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) return <h1 className="w-full text-center animate-spin text-9xl">🌀</h1>

    if (error) return 'An error has occurred: ' + error.message

    const searchRepos = data.filter(repo => searchedRepos.includes(repo.name) ? repo : null)

    return (
        <section id="me" className="" ref={fetchRef}>
            <h1 className={`text-center font-bold py-10 text-neutral-600
            lg:text-5xl
            md:text-3xl
            `}>Вот часть моих проектов:</h1>
            <h2 className={`text-center font-bold pb-10
            lg:text-xl
            md:text-base
            `}>Здесь, я, с использованием <a className="font-extrabold  bg-gradient-to-r text-gradient from-red-500 via-orange-500 to-amber-500" href="https://tanstack.com/query/latest/" target="_blank" rel="noreferrer">React-query</a>, получил некоторые проекты из моего <a href="https://github.com/Arsen4ik" className="font-extrabold text-black" target="_blank" rel="noreferrer">Github</a></h2>
            {
                searchRepos.map((repo, ind) => (
                    <div className={`odd:bg-neutral-100 p-20
                    lg:grid lg:grid-cols-2 lg:grid-rows-[2fr_1fr_1fr_3fr] lg:content-start lg:justify-start
                    md:flex md:flex-col md:gap-5
                    `}
                        key={repo.id}>
                        <h1 className="font-bold text-3xl tracking-widest text-center self-center">{repo.name}</h1>
                        <a className={(ind % 2 ? "text-end" : "text-start")} href={repo.html_url} target="_blank" rel="noreferrer">ссылка на github: <span className="underline font-Mooli">{repo.html_url}</span></a>
                        <a className={(ind % 2 ? "text-end" : "text-start")} href={`https:/${gitName}.github.io/${repo.name}/`} target="_blank" rel="noreferrer">ссылка на github pages: <span className=" underline font-Mooli">{`https:/${gitName}.github.io/${repo.name}/`}</span></a>
                        <p className={(ind % 2 ? "text-end" : "text-start") + " text-neutral-500 font-light italic"}>#{repo.description}</p>
                        <iframe className={(ind % 2 ? "lg:col-start-1 lg:col-end-2 lg:justify-self-start" : "lg:col-start-2 lg:col-end-3 lg:justify-self-end") + " lg:row-start-1 lg:row-end-7 w-iframe h-iframe shadow-xl rounded-2xl md:self-center md:mt-5 sm:w-56"} src={`https:/${gitName}.github.io/${repo.name}/`}></iframe>
                    </div>))
            }
            {/* <div className="bg-neutral-100 p-20 lg:grid lg:grid-cols-2 lg:grid-rows-[2fr_1fr_1fr_3fr] lg:content-start lg:justify-start md:flex md:flex-col md:gap-5">
                <h1 className="font-bold text-3xl tracking-widest text-center self-center text-neutral-600">Mosclean Detailing</h1>
                <a className="text-start" href="https://mosclean-detailing.ru/" target="_blank" rel="noreferrer">ссылка на сайт: <span className="group underline font-Mooli">mosclean-detailing.ru/</span></a>
                <p className="text-start
                text-neutral-500 font-light italic">#сайт был выполнен мною на заказ, для компании автосервиса Mosclean Detailing.</p>
                <iframe className="w-iframe h-iframe lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-7 shadow-xl rounded-2xl lg:justify-self-end md:self-center md:mt-5 sm:w-56" src="https://mosclean-detailing.ru/"></iframe>
            </div> */}
        </section>
    )
}
export default MyProjects