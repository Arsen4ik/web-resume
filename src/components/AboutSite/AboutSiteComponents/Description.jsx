/* eslint-disable react/prop-types */
const Description = ({ technologyChosed }) => {
    // console.log(technologyChosed);
    const [, text1, text2] = technologyChosed.data ? technologyChosed.data.text.split('\n') : ['', '']
    const [name_text, main_text] = text1.split(' - ')
    return (
        <>
            <p className=" text-xl "><span className={`font-extrabold tracking-wider bg-gradient-to-r text-gradient ${technologyChosed.data?.color}`}>{name_text}</span> - {main_text}</p>
            <p className=" text-neutral-500 font-light italic">{text2}</p>
            <a className=" self-end mt-auto underline tracking-wider hover:text-red-600 transition-all ease-in-out duration-300" target="_blank" href={technologyChosed.data?.link} rel="noreferrer">узнать больше о технологии...📎</a>
        </>
    )
}
export default Description