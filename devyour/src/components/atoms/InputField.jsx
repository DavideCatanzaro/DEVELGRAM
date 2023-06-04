import React, { useState } from "react";



const InputVariants = {
    primaryInputVariant: "border-1 peer block w-full appearance-none rounded-lg border border-blue bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-pink focus:outline-none focus:ring-0",
    secondaryInputVariant: "mt-4 w-full cursor-pointer rounded-lg bg-blue pt-3 pb-3 text-white shadow-lg hover:bg-pink",
    thirdInputVariant: " w-full h-7 py-2 pl-1 pr-4 text-grey bg-transparent border-none rounded-md dark:bg-white dark:text-grey dark:border-white  focus:outline-none focus:placeholder-blue placeholder-grey ",
}

const LabelVariants = {
    primaryLabelVariant: "absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
}

function InputField({placeholder,id,type,labelText,input,label}) {
  const [text,setText]= useState("")

  const handleText = (e) => {
    setText(e.target.value)
  }
  
  return (
    <>
      <input
        type={type}
        id={id}
        value={text}
        className={InputVariants[input]}
        placeholder={placeholder}
        onChange={handleText}
      />
      <label
        for={id}
        className={LabelVariants[label]}
      >
        
        {labelText}
      </label>
    </>
  );
}

export default InputField;
