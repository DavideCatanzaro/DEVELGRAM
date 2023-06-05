import React from "react";
import InputField from "../atoms/InputField";
import ButtonSend from "../atoms/ButtonSend";

export default function WriteComment() {
  return (
    <>
      <form className="flex ">
        <InputField
          type="text"
          id="text"
          value=""
          placeholder="Write a comment..."
          labelText=""
          input="primaryInputVariant"
        />
        <span className="flex justify-center items-center">
          <ButtonSend />
        </span>
      </form>
    </>
  );
}
