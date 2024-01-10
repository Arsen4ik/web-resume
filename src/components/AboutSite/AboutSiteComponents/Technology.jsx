// eslint-disable-next-line react/prop-types, no-unused-vars
import vite from '../Media/vite2.svg'
import react from '../Media/react.svg'
import tailwind from '../Media/tailwind.svg'
import reactQuery from '../Media/react-query.svg'
import reactRouter from '../Media/react-router.svg'

const Technology = ({ data, someTechnologyChosed, technologyChosed }) => {
    // eslint-disable-next-line react/prop-types
    const { id, img } = data
    // console.log(img);

    let image;
    if (img === './vite2.svg') image = vite
    else if (img === './react.svg') image = react
    else if (img === './tailwind.svg') image = tailwind
    else if (img === './react-query.svg') image = reactQuery
    else image = reactRouter

    let technologyChosedStyle = ['w-28', 'border-4', 'p-5', 'hover:p-4', 'border-rose-400']
    if (technologyChosed) {
        technologyChosedStyle = ['justify-self-start', 'w-20', 'border-2', 'p-3', 'hover:p-2', 'border-stone-300', 'hover:w-24', 'bg-slate-700']
    }
    return (
        <div onClick={() => someTechnologyChosed(id, image)}
            className={technologyChosedStyle.reduce((acc, el) => acc + el + ' ', '') + " border-solid rounded-full hover:border-red-600 transition-all ease-in-out duration-300 hover:cursor-help self-center"}>
            <img className="" src={image} alt="" />
        </div>
    )
}
export default Technology