import { contacts } from "../../../scripts/aboutMeInfo"

import apple from '../Media/contacts/apple.svg'
import github from '../Media/contacts/github.svg'
import phone from '../Media/contacts/phone.svg'
import telegram from '../Media/contacts/telegram.svg'
import vk from '../Media/contacts/vk.svg'
import yandex from '../Media/contacts/yandex.svg'

const Footer = () => {
    return (
        <footer className="bg-slate-700 h-36 flex flex-col items-center justify-evenly text-white">
            <div className="flex flex-row justify-between w-2/4">
                ---------
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
                            <a key={data[0]} href={data[1]} target="_blank" rel="noreferrer"
                                className="flex items-center justify-center">
                                <img className=" h-5 invert hover:animate-ping" src={image} alt="" />
                            </a>
                        )
                    })
                }
                ---------
            </div>
            <h1 className="font-bold tracking-widest text-xl flex flex-row gap-3"><span className=" animate-pulse">©</span>Arsen4ik<span className="animate-pulse">{new Date().getFullYear()}</span></h1>
        </footer>
    )
}
export default Footer