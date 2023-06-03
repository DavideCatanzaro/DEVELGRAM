import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 justify-center items-center bg-white p-5">
            <div className="mx-auto h-16 rounded-xl border-4 border-pink bg-white p-1">
                <img className="h-full object-contain" src="DevYour.png" alt="" />
            </div>
            <nav className="mx-auto p-2 flex items-center justify-center gap-5 text-center">
                <Link to="credits">
                    <a href="#" className="font-bold text-pink bg-white hover:text-blue">Credits</a>
                </Link>
                <a href="#" className="font-bold text-pink bgwhite hover:text-blue">Support</a>
                <a href="#" className="font-bold text-pink bg-white hover:text-blue">Privacy Policy</a>
                <a href="#" className="font-bold text-pink bg-white hover:text-blue">Terms & Conditions</a>
            </nav>
            <p className="mx-auto p-2 text-center font-bold text-blue bg-white hover:text-pink">© 2023 DevYour | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
