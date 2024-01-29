import React from 'react'

const InputField = (props) => {
  return (
    <input
      className="w-full font-FlameSans rounded-md border border-cBorder mt-1.5 mb-2.5"
      placeholder={props.placeholder}
      name={props.name}
      maxLength={15}
      onChange={props.handleInput}
      type='text'
    />
  );
}

export default InputField