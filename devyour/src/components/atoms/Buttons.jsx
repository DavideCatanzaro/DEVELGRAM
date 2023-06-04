const ButtonsVariants = {
    primaryButtonVariant: "btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue hover:bg-pink duration-300",
}

function Button({ type, button, value }) {
    return (
        <>
            
            <button
                type={type}
                className={ButtonsVariants[button]}
            >
                {value}
            </button>

        </>
    );
}

export default Button;