import React from 'react'
import bannerImage from './images/bannerImage2.jpeg';
import Footer from '../footer'

function Result() {
    return (
        <div className='w-screen h-[calc(100%-115px)] md:h-[calc(100%-125px)] xl:h-[calc(100%-130px)] overflow-x-hidden space-y-10 bg-yellow-200 bg-opacity-80'>

            <div className="h-[450px]" style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='w-full h-full flex flex-col items-center justify-center bg-neutral-80 bg-opacity-20 space-y-5 sm:space-y-20'>
                    {/* <div className='text-[30px] sm:text-[40px] md:text-[53px] font-bold sm:leading-[70px] text-[red]'>Patna Science Academy</div> */}
                    <div className='text-[40px] sm:text-[50px] md:text-[63px] font-bold sm:leading-[70px] text-black'>Results</div>
                    <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10'>
                        <a href="#11th"><div className='p-3 bg-[red] bg-opacity-80 rounded-xl text-white text-center font-bold hover:bg-red-600 hover:scale-105 duration-200'>Class 11</div></a>
                        <a href="#12th"><div className='p-3 bg-[red] bg-opacity-80 rounded-xl text-white text-center font-bold hover:bg-red-600 hover:scale-105 duration-200'>Class 12</div></a>
                        <a href="#mains"><div className='p-3 bg-[red] bg-opacity-80 rounded-xl text-white text-center font-bold hover:bg-red-600 hover:scale-105 duration-200'>JEE Mains</div></a>
                        <a href="#advance"><div className='p-3 bg-[red] bg-opacity-80 rounded-xl text-white text-center font-bold hover:bg-red-600 hover:scale-105 duration-200'>JEE Advance</div></a>
                        <a href="#neet"><div className='p-3 bg-[red] bg-opacity-80 rounded-xl text-white text-center font-bold hover:bg-red-600 hover:scale-105 duration-200'>NEET</div></a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-yellow-200 bg-opacity-80 py-10' id='11th'>
                <div className='xl:w-[1300px] m-auto px-5'>
                    <div className='py-5 text-2xl font-bold '>
                        11th Board
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                    </div> */}
                </div>
            </div>

            <div className='w-full bg-yellow-200 bg-opacity-80 py-10' id="12th">
                <div className='xl:w-[1300px] m-auto px-5'>
                    <div className='py-5 text-2xl font-bold '>
                        12th Board
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                    </div> */}
                </div>
            </div>

            <div className='w-full bg-yellow-200 bg-opacity-80 py-10' id="mains">
                <div className='xl:w-[1300px] m-auto px-5'>
                    <div className='py-5 text-2xl font-bold '>
                        JEE Main
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                    </div> */}
                </div>
            </div>

            <div className='w-full bg-yellow-200 bg-opacity-80 py-10' id="advance">
                <div className='xl:w-[1300px] m-auto px-5'>
                    <div className='py-5 text-2xl font-bold '>
                        JEE Advance
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                    </div> */}
                </div>
            </div>

            <div className='w-full bg-yellow-200 bg-opacity-80 py-10' id="neet">
                <div className='xl:w-[1300px] m-auto px-5'>
                    <div className='py-5 text-2xl font-bold '>
                        NEET
                    </div>
                    {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                        <div className='mx-2 my-2 sm:w-[200px]'><img src="https://qph.cf2.quoracdn.net/main-qimg-ea176d83a94d00ac6e3672594c8d292c-lq" alt="" /></div>
                    </div> */}
                </div>
            </div>

            {/* <div className='h-[50px] bg-yellow-200 bg-opacity-80'></div> */}
            <Footer />
        </div>
    )
}

export default Result