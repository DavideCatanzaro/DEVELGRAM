import React from "react";
import InputField from "../atoms/InputField";

export default function WriteComment() {
  return (
    <>
      <form className="flex gap-2">
        <InputField
          type="text"
          id="text"
          value=""
          placeholder="Write a comment..."
          labelText="Write a comment"
          input="primaryInputVariant"
          label="primaryLabelVariant"
        />
        <span className="flex items-center">
          <svg
            className="fill-blue hover:fill-pink"
            style={{ width: "28px", height: "28px" }}
            viewBox="0 0 24 24"
          >
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
          </svg>
        </span>
      </form>
    </>
  );
}
