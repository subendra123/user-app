import React from 'react'

const Input = ({label, type, id, ...props}) => {
  return (
    <>
    <div className="mb-4">
        <label htmlFor={id} className='blcok to-gray-600 font-semibold mb-2'>{label}</label>
        <input  
        type={type}
        id={id}
        name={id}
        autoComplete='off'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
        {...props}
        
        
        />
    </div>
    
    </>
  )
}

export default Input