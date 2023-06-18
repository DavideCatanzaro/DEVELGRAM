const styles = {
    login: "mt-4 w-full cursor-pointer rounded-lg bg-blue pt-3 pb-3 text-white shadow-lg hover:bg-pink",
    follow: "",
    send: "",
}

const ButtonCustom = ({ className, type, children, onClick }) => {
    const _className = [...styles[type], className].join(" ")
    return (
        <>
            <button className={_className} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default ButtonCustom
