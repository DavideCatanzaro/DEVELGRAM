const ButtonFollow = ({value}) => {
    return (
        <div className="mx-auto sm:ml-auto sm:mr-0">
            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300" type="button">
                {value}
            </button>
        </div>
    );
}

export default ButtonFollow
