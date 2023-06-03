import React from "react";
import InputField from "../atoms/InputField";
import ButtonSend from "../atoms/ButtonSend";

export default function WriteComment() {
  return (
    <>
      <form className="flex gap-2">
        <InputField
          type="text"
          id="text"
          value=""
          placeholder="Write a comment..."
          labelText=""
          input="primaryInputVariant"
          label="primaryLabelVariant"
        />
        <span className="flex items-center">
          <ButtonSend />
        </span>
      </form>
    </>
  );
}
