const Footer = () => {
    return (
        <footer className="relative mt-20 bg-blue px-4 pt-20">
            <div className="absolute -top-10 left-1/2 h-16 w-30 -translate-x-1/2 rounded-xl border-4 border-pink bg-white p-2"><img className="h-full object-contain" src="DevYour.png" alt="" /></div>
            <nav aria-label="Footer Navigation" className="mx-auto mb-10 flex items-center justify-center max-w-lg flex-col gap-5 text-center sm:flex-row sm:text-left bg-blue">
                <a href="#" className="font-extrabold text-pink bg-blue">Team</a>
                <a href="#" className="font-extrabold text-pink bg-blue">Support</a>
                <a href="#" className="font-extrabold text-pink bg-blue">Privacy Policy</a>
                <a href="#" className="font-extrabold text-pink bg-blue">Terms & Conditions</a>
            </nav>
            <p className="py-4 text-center font-extrabold text-blue bg-pink">© 2023 DevYour | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
