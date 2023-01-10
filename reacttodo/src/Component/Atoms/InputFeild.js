import React from 'react'

function InputFeild({feild_name,type,value,placeholder,className,onChange,onClick}) {
  return (
    <div>
    <input type={type} value={value} placeholder={placeholder} className={className} onChange={onChange}/>
        {feild_name}
        <button className='button1' onClick={onClick} >Click To Add</button>
        </div>
        )
}

export default InputFeild