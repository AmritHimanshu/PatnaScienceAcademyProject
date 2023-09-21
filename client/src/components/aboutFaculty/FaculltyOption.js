import React from 'react'

function FaculltyOption({ name, designation,source }) {
    return (
        <div className="w-auto h-auto m-[20px] p-[20px] bg-white shadow-xl rounded-xl hover:scale-105 duration-300">

            <img src={source} alt="alt" className='w-[300px]'/>

            <h3 className='py-3 text-lg'>{name}</h3>
            
            <p>{designation}</p>

        </div>
    )
}

export default FaculltyOption