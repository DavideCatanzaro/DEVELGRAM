const ButtonSend = ({onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled} className="cursor-pointer flex items-center py-2 px-4 rounded-lg text-sm bg-blue hover:bg-pink text-white shadow-lg">
            <span>Send</span>
            <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
    );
};

export default ButtonSend;