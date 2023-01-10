import React from 'react'

const ButtonComponent = ({
    onSubmit=()=>{},
    label="",
    style={},
    className=""
}) => {
  return (
    <div>
        <button
        onClick={onSubmit}
        style={style}
        label={ label}
        className={className}
        >
         {label}
        </button>
    </div>
  )
}

export default ButtonComponent