import React, { useState } from "react";
import axios from "axios";

const BannerForm = () => {

  const [formData, setFormData] = useState({
    course: "11",
    name: "",
    email: "",
    mobile: "",
    dob: "",
    board: "BIHAR",
    gender: "male",
    aadhar: "",
    parents: "",
    address: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [error, setError] = useState("");

  const phoneRegex = /^\+?[0-9]+$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "mobile" && !phoneRegex.test(value)) {
      setError("Phone number must be in the format +12345678901");

    } else {
      setError("");
    }
    console.log("Error:", error);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendOTP = async () => {
    try {
      if (!formData.mobile) {
        alert("Please enter a mobile number.");
        return;
      }
      // Make a POST request to send OTP to the backend
      const response = await axios.post("http://localhost:2002/api/sendOTP", { mobile: formData.mobile });
      if (response.status === 200 && response.data.otpSent) {
        alert("OTP sent successfully!");
        setOtpSent(true);
        setOtpVerified(false); // Reset otpVerified to false when OTP is sent again

      } else {
        alert("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again later.");
    }
    setOtpInput("");
  };

  //otp ka funtion
  const handleVerifyOTP = async () => {
    if (otpInput === "") {
      alert("Please enter the OTP before verifying.");
      return;
    }

    try {
      // Make a POST request to verify OTP with the backend
      const response = await axios.post("http://localhost:2002/api/verifyOTP", { mobile: formData.mobile, otp: otpInput });
      if (response.status === 200 && response.data.otpVerified) {
        alert("OTP verified successfully!");
        setOtpVerified(true);

      } else {
        alert("Invalid OTP. Please try again.");

      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again later.");
      setOtpSent(false);
    }
  };

  //function check krne ke liye sb bhara hai ya nhi
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!otpSent) {
      alert("Please send OTP and verify before submitting the form.");
      return;
    }

    if (!otpVerified) {
      alert("Please verify OTP before submitting the form.");
      return;
    }
    let hasEmptyField = false;
    for (const field in formData) {
      if (formData[field] === "") {
        hasEmptyField = true;
        break;
      }
    }

    if (hasEmptyField) {
      alert("Please fill in all fields.");
      return;
    } else {
      try {
        // Make a POST request to save form data to the backend
        const response = await axios.post("http://localhost:2002/api/saveForm", formData);
        if (response.status === 201) {
          alert("Form submitted successfully!");
        } else {
          alert("Failed to submit form. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      }


    }

    setFormData({
      course: "11",
      name: "",
      email: "",
      mobile: "",

      dob: "",
      board: "BIHAR",
      gender: "male",
      aadhar: "",
      parents: "",
      address: "",

    })
    setOtpInput("");
    setOtpSent(false);
  };


  return (

    <div className="w-screen" style={{
      backgroundImage: `url('https://media.istockphoto.com/id/1169220692/photo/cheerful-schoolgirl-in-graduation-outfit-carrying-apple-while-standing-beside-pile-of.jpg?s=612x612&w=0&k=20&c=2CbdvcCRWm6QouxgzC656c-O_yXu-Fgj6TRVSICD1vs=')`,
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>

      <div className="w-screen flex flex-col items-center p-4">
        <div className="py-10">

          <h4 className="py-2 text-md md:text-2xl text-black">Appear in Instant Online</h4>

          <h1 className="my-3 text-[red] text-[20px] md:text-[45px] p-3 bg-white bg-opacity-80 rounded-xl">
            <strong> PATNA SCIENCE ACADEMY SCHOLARSHIP PROGRAM (PSASP)</strong>
          </h1>

          <h3 className="text-md md:text-xl my-2 text-black">
            For Class 6th to 12th &amp; 12th Pass Out Students
          </h3>

          <div className="text-xl my-3 py-5 bg-yellow-400 rounded-xl shadow-xl">
            <div className="">
              <div>
                Avail upto <p>100% SCHOLARSHIP</p>{" "}on{" "}
                <p>JEE(MAINS & ADVANCE),NEET FOUNDATION</p> courses
              </div>
            </div>
          </div>

        </div>

        <div className="my-10 py-10 rounded-xl bg-neutral-700 bg-opacity-80 shadow-2xl">

          <form className="px-5 lg:px-10 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            <h3 className="text-yellow-400 pb-10 text-3xl underline">Scholarship Form</h3>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 xl:space-x-20 mb-10">
              <div className="space-y-5 md:w-[350px] xl:w-[450px]">
                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="course" className="text-white">Course <span className="text-red-500">*</span></label>
                  <select className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                    <option value="JEE">JEE</option>
                    <option value="NEET">NEET</option>
                  </select>
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="name" className="text-white">Your Name <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="email" className="text-white">Email Address <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                    <label htmlFor="mobile" className="text-white">Mobile Number <span className="text-red-500">*</span></label>
                    <div className="flex w-[450px]">
                      <input className="px-2 sm:px-5 py-1 sm:py-2 w-[200px] sm:w-[250px] xl:w-[300px] text-black text-md rounded-l sm:rounded-tl-xl sm:rounded-bl-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                        id="mobile"
                        name="mobile"
                        type="tel"
                        // pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your number"
                      />

                      {error && <span className="error">{error}</span>}
                      {otpSent ? (
                        <>
                          <input
                            className="px-2 sm:px-5 py-1 sm:py-2 w-[150px] text-black text-md rounded-r sm:rounded-tr-xl sm:rounded-br-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                            type="text"
                            id="otpInput"
                            name="otpInput"
                            value={otpInput}
                            onChange={(e) => setOtpInput(e.target.value)}
                            placeholder="Enter OTP"
                          />
                          <button
                            type="button"
                            className="w-[100px] sm:w-[100px] md:w-[100px] xl:w-[150px] text-white bg-black bg-opacity-40 rounded-tr-md rounded-br-md sm:rounded-tr-xl sm:rounded-br-xl hover:bg-opacity-30"
                            onClick={handleVerifyOTP}>
                            Verify OTP
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          className="w-[100px] sm:w-[100px] md:w-[100px] xl:w-[150px] text-white bg-black bg-opacity-40 rounded-tr-md rounded-br-md sm:rounded-tr-xl sm:rounded-br-xl hover:bg-opacity-30"
                          onClick={handleSendOTP}
                        >
                          Send OTP
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="name" className="text-white">Date of birth <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="Enter your date of birth"
                  />
                </div>
              </div>

              <div className="space-y-5 md:w-[350px] xl:w-[450px]">
                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="course" className="text-white">Board <span className="text-red-500">*</span></label>
                  <select className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    id="board"
                    name="board"
                    value={formData.course}
                    onChange={handleInputChange}>
                    <option value="BIHAR">BIHAR Board</option>
                    <option value="ICSE">ICSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="UP">UP Board</option>
                    <option value="OTHER">OTHER Board</option>
                  </select>
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="class" className="text-white">Gender <span className="text-red-500">*</span></label>
                  <select className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="name" className="text-white">Aadhar No. <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleInputChange}
                    placeholder="Enter your Aadhar No."
                  />
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="name" className="text-white">Father's Name / Mother's Name <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="text"
                    id="parents"
                    name="parents"
                    value={formData.parents}
                    onChange={handleInputChange}
                    placeholder="Enter your father's name"
                  />
                </div>

                <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px]">
                  <label htmlFor="email" className="text-white">Permanent Address <span className="text-red-500">*</span></label>
                  <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[350px] xl:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl hover:bg-red-600 hover:scale-105 duration-200">
              <button type="submit" style={{ color: 'white', fontWeight: '600', backgroundColor: 'rgba(255, 0, 0, 1)', padding: '8px 15px', borderRadius: '7px' }}>Register</button>
            </div>

            <p className="underline mt-10">
              <a
                href="https://www.google.com/maps/dir/25.7163414,85.0592406/Bazar+Samiti,+Saketpuri,+main+gate,+Patna,+Bihar+800016/@25.6002908,85.1073058,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed59a053f710e7:0x884cb78d62517ab6!2m2!1d85.1773461!2d25.6003075?entry=ttu"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-300  hover:text-yellow-400">
                Or visit us at Bazar Samiti, Saketpuri, main gate, Patna, Bihar
                800016{" "}
              </a>
            </p>
          </form>

        </div>
      </div>

    </div>
  );
};

export default BannerForm;
