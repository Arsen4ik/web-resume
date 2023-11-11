import { Link, Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <header className=" h-12 bg-slate-700 text-slate-50 flex flex-row justify-between items-center px-10 font-bold">
                <Link to='/' className="flex flex-row gap-3 items-center logo-hov-animation">
                    <img className="h-7 duration-300" src='./logo.svg' alt="cool logo" />
                    {/* <Logo /> */}
                    <h1>главная</h1>
                    </Link>
                <Link className=" flex flex-row gap-3" to='/tech'><h1>о сайте</h1><p className=" animate-spin">⚙️</p></Link>
            </header>
            <Outlet />
        </>
    )
}
export default Root