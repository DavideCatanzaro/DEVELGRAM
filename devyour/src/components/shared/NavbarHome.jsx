import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="shadow mb-2" style={{backgroundColor: "#FFFAFA", margin: 0,}}>
            <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
                    <span className="mr-2 text-4xl text-blue-600">
                        <img src="DevYour.png" alt="logo" />
                    </span>
                    <span className="text-black"  ></span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                      <Link to="credits">  <li className="text-blue md:mr-12 hover:text-pink" ><a href="#">Credits</a></li></Link>
                        <li className="text-blue md:mr-12 hover:text-blue">
                           <Link to='/login'> <button className="rounded-md border-2 border-blue px-6 py-1 font-medium text-blue transition-colors hover:border-pink hover:text-pink" >Login</button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar