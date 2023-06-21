const ButtonLogin = ({ value, disabled,onClick }) => {
  return (
    <button
      className="mt-4 w-full cursor-pointer rounded-lg bg-blue pt-3 pb-3 text-white shadow-lg hover:bg-pink"
      onClick={onClick}
      disabled={disabled}
    >
      {value}
      
    </button>
  );
};

export default ButtonLogin;
