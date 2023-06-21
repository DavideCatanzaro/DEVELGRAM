const ButtonLogin = ({value}) => {
    return (
        <button className="mt-4 w-full cursor-pointer rounded-lg bg-blue pt-3 pb-3 text-white shadow-lg hover:bg-pink">
            {value}
        </button>
    );
}

export default ButtonLogin