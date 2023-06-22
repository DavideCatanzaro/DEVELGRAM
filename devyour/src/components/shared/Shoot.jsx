const Shoot = ({ storyImage, onclick }) => {
  return (
    <>
      
      <div className="relative ">
        <button onClick={onclick} className="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
          <img className="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src={storyImage} alt="img" />
        </button>
      </div>
    </>
  );
};

export default Shoot;
