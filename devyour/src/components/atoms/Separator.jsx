const Separator = ({ title }) => {
    return (
        <>
            <div className="flex items-center justify-center p-4">
                <div className="pr-2">
                    <span>{title}</span>
                </div>
                <hr className="grow" />

            </div>
        </>
    )
}

export default Separator