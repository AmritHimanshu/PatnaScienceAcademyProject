import React from 'react';

function SalientFeaturesCard({logo, heading, title}) {
    return (
        <div className='m-auto my-5 text-start p-5 rounded-xl bg-white shadow-xl w-[320px] md:w-[400px h-[350px] hover:scale-105 duration-300 cursor-default'>
            {logo}
            <div className='text-lg font-bold my-2'>{heading}</div>
            <div className='ml-3'>{title}</div>
        </div>
    )
}

export default SalientFeaturesCard