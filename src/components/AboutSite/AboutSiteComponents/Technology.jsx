// eslint-disable-next-line react/prop-types, no-unused-vars
const Technology = ({ data, someTechnologyChosed, technologyChosed }) => {
    // eslint-disable-next-line react/prop-types
    const { id, img } = data
    let technologyChosedStyle = ['w-28', 'border-4', 'p-5', 'hover:p-4', 'border-rose-400']
    if(technologyChosed){
        technologyChosedStyle = ['justify-self-start', 'w-20', 'border-2', 'p-3', 'hover:p-2', 'border-stone-300', 'hover:w-24', 'bg-slate-700']
    }
    return (
        <div onClick={() => someTechnologyChosed(id)}
         className={technologyChosedStyle.reduce((acc, el) => acc + el + ' ', '') + " border-solid rounded-full hover:border-red-600 transition-all ease-in-out duration-300 hover:cursor-help self-center"}>
          <img className="" src={img} alt="" />
        </div>
    )
}
export default Technology