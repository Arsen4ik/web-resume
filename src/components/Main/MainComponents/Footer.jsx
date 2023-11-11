import { contacts } from "../../../scripts/aboutMeInfo"

const Footer = () => {
    return (
        <footer className="bg-slate-700 h-36 flex flex-col items-center justify-evenly text-white">
            <div className="flex flex-row justify-between w-2/4">
                ---------
                {
                    contacts.map(data => (
                            <a key={data[0]} href={data[1]} target="_blank" rel="noreferrer"
                                className="flex items-center justify-center">
                                <img className=" h-5 invert hover:animate-ping" src={`./contacts/${data[2]}.svg`} alt="" />
                            </a>
                    ))
                }
                ---------
            </div>
            <h1 className="font-bold tracking-widest text-xl flex flex-row gap-3"><span className=" animate-pulse">©</span>Arsen4ik<span className="animate-pulse">{new Date().getFullYear()}</span></h1>
        </footer>
    )
}
export default Footer