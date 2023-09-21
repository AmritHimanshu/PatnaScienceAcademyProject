import React from 'react';
import IntroOption from './IntroOption';
import Footer from '../footer';

const Introduction = () => {
  return (
    <div className='bg-yellow-200 bg-opacity-80 h-[calc(100%-110px)] overflow-y-scroll overflow-x-hidden'>

      <div className='px-2 bg-yellow-300 flex items-center justify-evenly cursor-default'>

        <div className='w-[1000px] hidden xl:inline'>
          <img src="https://www.pngmart.com/files/21/Introduction-PNG-HD-Isolated.png" alt="alt" />
        </div>

        <div className="py-10 xl:py-32 text-center font-medium ">
          <h1 className='text-center text-[30px] sm:text-[40px] md:text-[50px] text-red-600 font-bold'>Introduction</h1>
          <div className="px-3 mt-[20px] text-center">
            <p className='text-[15px] sm:text-lg'>
              Patna Science Academy prepares students for various competitive examinations for classes 11th & 12th. We focus on developing intelligence quotient (IQ), mathematical aptitude, scientific approach, logical thinking, reasoning skills & problem-solving skills through classroom programs. Our comprehensive approach ensures that students of class 11th to 12th achieve success in their school exams, Boards, JEE, NEET, POLYTECHNIC & PARAMEDICAL.
            </p>
          </div>
        </div>

      </div>

      <div className='flex flex-col 2xl:flex-row items-center'>
        <div className='mt-[60px] text-center'>
          <h1 className='text-[30px] sm:text-3xl font-bold'>Why should you choose Patna Science Academy ?</h1>
          <p className='py-5 w-[90%] text-center mt-[10px] text-[15px] sm:text-lg'>Our initiative as well as our commitment in developing successful Doctors,IITians and NITians have been among the top programs.</p>
        </div>

        <div className="mt-[60px] flex items-center justify-center flex-wrap">

          <IntroOption title="How We Started?" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ratione quia consequuntur porro enim delectus non hic nihil maiores! Cumque!" source="https://www.pngall.com/wp-content/uploads/11/Telegram-PNG-Photos.png" />

          <IntroOption title="What We Aim For?" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ratione quia consequuntur porro enim delectus non hic nihil maiores! Cumque!" source="https://www.pngkey.com/png/full/88-880409_our-vision-aim-and-objects.png" />

          <IntroOption title="Our Mission" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ratione quia consequuntur porro enim delectus non hic nihil maiores! Cumque!" source="https://freepngimg.com/thumb/categories/1791.png" />

        </div>
      </div>

      <div className='mt-[60px] py-20 bg-white flex flex-col xl:flex-row items-center justify-center'>

        <div className=''>
          <img src="https://global-uploads.webflow.com/5e2d970a86f417102b21abd2/61851be2b82096ac2d73b883_5f7efa69627027085425deae_Goal%20Orientation%20(bubble)2%201%20(1).svg" alt="alt" />
        </div>

        <div className='mt-[60px] text-center'>
          <h1 className='text-[30px] sm:text-3xl font-bold'>Our Goal</h1>
          <p className='py-5 w-[90%] text-start mt-[10px] text-[15px] sm:text-lg'>The Goal of Patna Science Academy is to empower individuals to unlock their full potential and achieve their goals. We are dedicated to providing high-quality education and guidance to students and professionals alike. Our goals are to offer comprehensive courses, personalized mentorship, and a supportive learning environment. We strive to foster a culture of continuous growth and development, equipping our students with the knowledge, skills, and mindset necessary for success. Through our interactive platform, we aim to inspire and motivate learners, helping them overcome challenges and excel in their chosen fields. Together, we aspire to create a brighter future through education and empowerment.</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Introduction;
