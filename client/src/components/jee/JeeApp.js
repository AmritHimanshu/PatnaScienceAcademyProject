import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import PrintIcon from "@mui/icons-material/Print";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuizIcon from "@mui/icons-material/Quiz";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Footer from "../footer";

export default function JeeApp() {

  return (
    <section className="w-[100%] h-[calc(100%-115px)] md:h-[calc(100%-125px)] xl:h-[calc(100%-130px)] bg-yellow-200 bg-opacity-80 overflow-y-scroll overflow-x-hidden">

      <div className="text-center py-5">
        <h2 className="text-[30px] md:text-[40px] xl:text-[40px] font-bold">JEE (Main+Advanced) - 2025</h2>
        <p className="text-[15px] sm:text-lg py-5 px-5">
          WE ensures to provide quality education for the optimum results and
          success of students, so far, we have acquired remarkable selection
          ratios in competitive exams.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-row items-center justify-evenly py-5 space-y-5 sm:space-y-0">
          <a href="#course-highlights">
            <div className="p-3 sm:text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 hover:scale-105 duration-200">Course Description</div>
          </a>
          <a href="#planner">
            <div className="p-3 sm:text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 hover:scale-105 duration-200">Planner</div>
          </a>
          <a href="#fees-structure">
            <div className="p-3 sm:text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 hover:scale-105 duration-200">Fees Structure</div>
          </a>
        </div>

        <div className="my-[50px] mx-2 lg:mx-[80px] p-[20px] bg-white " id="course-highlights">
          <h3 className="text-[28px] p-[18px]">Course Description of JEE (Main + Advanced)</h3>
          <p className="sm:text-[18px] p-[20px] leading-7 ">
            Patna Science Academy has long been distinguished for providing the
            Best class room Coaching, Online Learning Facility and getting
            excellent results. The curriculum is specifically designed for the
            JEE 2025 aspirants along with their 11th preparations. To strengthen
            the foundation, conceptual knowledge and enhance the academic skills
            this course is the best option. The course helps the aspirants with
            better understanding of the examination pattern and ensure their
            success in the JEE with ease through a year-long curriculum.
          </p>
          <h3 className="text-[28px] pt-[18px]">Course Hightlights</h3>
          <div className="flex flex-col 2xl:flex-row my-[20px] px-[0px] w-[100%] ">
            <div className="">
              <div className="my-[20px] lg:mx-[50px] p-[10px] md:w-[520px] h-[100px] bg-white rounded-xl flex items-center space-x-5">
                <SchoolIcon sx={{ color: "#1f3f65" }} />
                <p className="text-[16px]">
                  Structured Academic Planner for JEE 2025 & Also get Support
                  for 12th Board Preparation
                </p>
              </div>
              <div className="my-[20px] lg:mx-[50px] p-[10px] md:w-[520px] h-[100px] bg-white rounded-xl flex items-center space-x-5">
                <HeadphonesIcon sx={{ color: "#1f3f65" }} />
                <p className="text-[16px]">Complete Syllabus Coverage of class 11th.</p>
              </div>
              <div className="my-[20px] lg:mx-[50px] p-[10px] md:w-[520px] h-[100px] bg-white rounded-xl flex items-center space-x-5">
                <BarChartIcon sx={{ color: "#1f3f65" }} />
                <p className="text-[16px]">Printed Study Material & Daily Practice Sheets.</p>
              </div>
            </div>
            <div className="types">
              <div className="my-[20px] lg:mx-[50px] p-[10px] md:w-[520px] h-[100px] bg-white rounded-xl flex items-center space-x-5">
                <PrintIcon sx={{ color: "#1f3f65" }} />
                <p className="text-[16px]">
                  Free Access to Motion Learning App for conceptual revision of
                  Syllabus.
                </p>
              </div>
              <div className="my-[20px] lg:mx-[50px] p-[10px] md:w-[520px] h-[100px] bg-white rounded-xl flex items-center space-x-5">
                <SettingsApplicationsIcon sx={{ color: "#1f3f65" }} />
                <p className="text-[16px]">One on One doubt solving support & Regular Test facility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[50px] mx-[5px] lg:mx-[80px] p-[20px] bg-red-600 text-white flex flex-col justify-evenly 2xl:items-center rounded-xl" id="planner">
        <div className="text-[30px] sm:text-[40px] font-bold p-[10px] text-center my-5">
          <h4>Planner</h4>
        </div>
        <div className="my-[4px] xl:w-[880px] h-[100px] rounded-md flex items-center">
          <SchoolIcon sx={{ color: "#fff" }} />
          <p className="text-[18px] lg:text-[22px] text-white p-[8px] pl-[12px] leading-6 md:leading-8">
            <span className="text-[22px] text-yellow-300">590+</span> Online & Offline classes (Physics 170+, Chemistry
            170+ & Mathematics 220+) with Lecture of 90 Minute Each.
          </p>
        </div>
        <div className="my-[4px] xl:w-[880px] h-[100px] rounded-md flex items-center">
          <QuestionAnswerIcon sx={{ color: "#fff" }} />
          <p className="text-[18px] lg:text-[22px] text-white p-[8px] pl-[12px] leading-6 md:leading-8">
            <span>8000+ </span> of Questions Solve Online & Offline Mode.
          </p>
        </div>
        <div className="my-[4px] xl:w-[880px] h-[100px] rounded-md flex items-center">
          <QuizIcon sx={{ color: "#fff" }} />
          <p className="text-[18px] lg:text-[22px] text-white p-[8px] pl-[12px] leading-6 md:leading-8">
            <span className="text-[22px] text-yellow-300">20+</span> Test Papers Will Conduct for Practice.
          </p>
        </div>
        <div className="my-[4px] xl:w-[880px] h-[100px] rounded-md flex items-center">
          <LocalLibraryIcon sx={{ color: "#fff" }} />
          <p className="text-[18px] lg:text-[22px] text-white p-[8px] pl-[12px] leading-6 md:leading-8">
            <span className="text-[22px] text-yellow-300">Free Acess of Learning App </span>which contain Live class &
            Recorded Video Lectures, Video Solutions, PYQ'S & Others Support.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center 2xl:w-[820px] h-[100px] space-y-5 md:space-y-0 my-10">
          <button className="p-[10px] bg-yellow-300 text-red-600 rounded-xl text-[18px] font-bold w-[140px] h-[50px] flex justify-evenly items-center cursor-pointer hover:bg-yellow-400 duration-200">Enroll Now</button>
          <button className="p-[10px] bg-yellow-300 text-red-600 rounded-xl text-[18px] font-bold w-[140px] h-[50px] flex justify-evenly items-center cursor-pointer hover:bg-yellow-400 duration-200">
            <img src="assets/planner/download-pdf.png" alt="pdf" />
            Planner
          </button>
        </div>
      </div>

      <div className="my-[20px] mx-[5px] lg:mx-[80px] p-[20px] flex flex-col items-center justify-evenly rounded-xl " id="fees-structure">

        <h2 className="p-[20px] text-[30px] md:text-[40px] xl:text-[40px] font-bold text-center">Course Fee for 11th class- Targeting JEE 2025</h2>
        <h5 className="pb-[10px] text-[15px] sm:text-lg">Available in classroom & Online (Live Mode)</h5>

        <div className="p-[20px] flex flex-col lg:flex-row space-y-10 lg:space-y-0 mt-10 items-center justify-evenly w-[1200px]">
          <div className="flex flex-col items-center justify-evenly rounded-xl py-[10px] px-[10px] w-[350px] sm:w-[400px] md:w-[500px] h-[300px] bg-white shadow-xl mx-3">
            <span className="bg-red-600 text-white text-[20px] items-start rounded-md p-[10px] left-0">Live Online Program</span>
            <p className="text-black text-[20px] font-[600] px-[20px] leading-7 text-center">
              Study from the comfort of your home and attend the best{" "}
              <span className="uppercase ">ONLINE COURSE</span>
            </p>
            <h2>
              Fee: <span>₹ 35,000</span>
            </h2>
            <button className="w-auto h-auto py-[10px] px-[20px] text-[15px] bg-yellow-300 text-red-600 font-bold rounded-xl cursor-pointer hover:bg-yellow-400 duration-200 ">Pay Now</button>
          </div>

          <div className="flex flex-col items-center justify-evenly rounded-xl py-[10px] px-[10px] w-[350px] sm:w-[400px] md:w-[500px] h-[300px] bg-white shadow-xl mx-3">
            <span className="bg-red-600 text-white text-[20px] items-start rounded-md p-[10px] left-0">classroom Program</span>
            <p className="text-black text-[20px] font-[600] px-[20px] leading-7 text-center">
              <span className="uppercase ">classROOM</span> Mode is available for student who wants to
              study in offline center
            </p>
            <h2>
              Fee: <span>₹ 45,000</span>
            </h2>
            <button className="w-auto h-auto py-[10px] px-[20px] text-[15px] bg-yellow-300 text-red-600 font-bold rounded-xl cursor-pointer hover:bg-yellow-400 duration-200 ">Pay Now</button>
          </div>
        </div>

        <div className="flex flex-row justify-evenly items-center py-[10px] px-[20px] w-[80%] mb-[30px] ">
          <h4>Upcoming Batch Dates</h4>
          <h3 className="py-[10px] px-[20px] text-[12px] bg-red-500 text-white rounded-xl ">21st June 2023</h3>
        </div>
      </div>

      <Footer />
    </section>
  );
}
