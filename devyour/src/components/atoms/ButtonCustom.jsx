const styles = {
    success: ""
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
