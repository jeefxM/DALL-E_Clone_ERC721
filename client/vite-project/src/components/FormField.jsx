import React from "react";

function FormField({
  labelName,
  type,
  name,
  placeHolder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div>
      <div className="flex ite items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
          {isSurpriseMe && (
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="font-semibold text-xs bg-[#ECECF1] py-1 px-5 rounded-[5px] text-black"
            >
              Surprise me
            </button>
          )}
        </label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm-rounded-lg focus:ring-[#4649ff] focus-border outline-none block w-full p-3 mb-5 border"
      />
    </div>
  );
}

export default FormField;
