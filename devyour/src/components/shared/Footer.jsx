import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="relative mt-8 bg-white px-4 pt-10">
            <div className="absolute -top-10 left-1/2 h-16 w-30 -translate-x-1/2 rounded-xl border-4 border-pink bg-white p-2"><img className="h-full object-contain" src="DevYour.png" alt="" /></div>
            <nav aria-label="Footer Navigation" className="mx-auto mb-2 flex items-center justify-center max-w-lg flex-col gap-5 text-center sm:flex-row sm:text-left bg-white">
            <Link to="credits">   <a href="#" className="font-bold text-pink bg-white hover:text-blue">Credits</a></Link>
                <a href="#" className="font-bold text-pink bgwhite hover:text-blue">Support</a>
                <a href="#" className="font-bold text-pink bg-white hover:text-blue">Privacy Policy</a>
                <a href="#" className="font-bold text-pink bg-white hover:text-blue">Terms & Conditions</a>
            </nav>
            <p className="py-4 text-center font-bold text-blue bg-white hover:text-pink">© 2023 DevYour | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
