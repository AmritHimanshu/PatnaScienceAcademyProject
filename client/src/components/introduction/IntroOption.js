import React from 'react'

function IntroOption({ title, description,source }) {
    return (
        <div className="w-[320px] md:w-[360px] lg:w-[400px] h-[500px] lg:h-[450px] m-[20px] p-[20px] bg-white flex flex-col justify-between shadow-xl rounded-xl hover:scale-105 duration-300">

            <img src={source} alt="alt" className='w-[300px]'/>

            <div>
                <h3 className='py-3 text-lg'>{title}</h3>

                <p>{description}</p>
            </div>

        </div>
    )
}

export default IntroOption