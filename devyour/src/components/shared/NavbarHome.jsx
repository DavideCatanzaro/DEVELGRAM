import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="shadow mb-2">
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <div className="flex items-center whitespace-nowrap text-2xl font-black">
                    <span className="mr-2 text-4xl text-blue-600">
                        <img src="DevYour.png" alt="logo" />
                    </span>
                    <span className="text-black"  ></span>
                </div>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <div className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <Link to="credits" className="text-blue md:mr-12 hover:text-pink">Credits</Link>
                        <Link to='/login' className="text-blue md:mr-12 hover:text-blue">
                            <button className="rounded-md border-2 border-blue px-6 py-1 font-medium text-blue transition-colors hover:border-pink hover:text-pink" >Login</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;