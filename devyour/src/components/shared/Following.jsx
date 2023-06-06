import { Link } from "react-router-dom"

const Following = () => {
    return (
        <>
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-gray-600 text-sm font-semibold mb-4">Following</h3>
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray-500">
                            Sage
                        </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray truncate">
                            Jett
                        </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray truncate">
                            Sky
                        </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray truncate">
                            Olivia
                        </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray truncate">
                            Julia
                        </span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <a className="block bg-white p-1 rounded-full" href="#" >
                            <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="" />
                        </a>
                        <span className="text-xs text-gray truncate">
                            Hendrick
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Following