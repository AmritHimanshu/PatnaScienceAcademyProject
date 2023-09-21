import React from 'react';
import FaculltyOption from './FaculltyOption';
import Footer from '../footer';

const AboutFaculty = () => {
  return (
    <div className='bg-yellow-200 bg-opacity-80 h-[calc(100%-110px)] overflow-y-scroll overflow-x-hidden'>

      <div className='px-2 bg-yellow-300 flex items-center justify-evenly cursor-default'>

        <div className='w-[1000px] hidden xl:inline'>
          <img src="https://www.pngmart.com/files/About-Us-Download-PNG-Image.png" alt="alt" />
        </div>

        <div className="py-10 xl:py-32 text-center font-medium ">
          <h1 className='text-center text-[30px] sm:text-[40px] md:text-[50px] text-red-600 font-bold'>About <span className='text-black'>Us</span></h1>
          <div className="px-3 mt-[20px] text-center">
            <p className='text-[15px] sm:text-lg'>
              Patna Science Academy prepares students for various competitive examinations for classes 11th & 12th. We focus on developing intelligence quotient (IQ), mathematical aptitude, scientific approach, logical thinking, reasoning skills & problem-solving skills through classroom programs. Our comprehensive approach ensures that students of class 11th to 12th achieve success in their school exams, Boards, JEE, NEET, POLYTECHNIC & PARAMEDICAL.
            </p>
          </div>
        </div>

      </div>

      <div className=''>
        <div className='mt-[60px] text-center'>
          <h1 className='text-[30px] sm:text-3xl font-bold'>Our Skilled Faculties</h1>
          <p className='py-5 w-[90%] text-center mt-[10px] text-[15px] sm:text-lg'>Patna Science Academy is proud to have a team of highly skilled and experienced faculties. They bring a wealth of knowledge and expertise to the classroom, ensuring our students receive top-quality education. With their passion for teaching and dedication to student success, our faculties create an engaging and supportive learning environment.</p>
        </div>

        <div className="mt-[60px] flex items-center justify-center flex-wrap">

          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />
        
          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />
        
          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />
        
          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />
        
          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />
        
          <FaculltyOption name="Mr. Hussain" designation="Organic Chemistry" source="https://w7.pngwing.com/pngs/329/705/png-transparent-teacher-student-education-tutor-faculty-teacher-class-expert-recruiter-thumbnail.png" />         
        
        </div>
      </div>

      <div className='h-[200px]'></div>

      <Footer />

    </div>
  );
};

export default AboutFaculty;
