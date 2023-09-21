import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegistrationForm = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();

    if (name === "") return alert("Enter your name");
    if (email === "") return alert("Enter your email");
    if (mobile === "") return alert("Enter your mobile");
    if (password === "") return alert("Enter your password");
    if (cpassword === "") return alert("Enter your confirm password");
    if (password !== cpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:2004/api/register', { name, email, mobile, password });
      // Assuming the server returns the token upon successful registration
      const { token } = response.data;
      // Store the token in local storage for subsequent authenticated requests
      localStorage.setItem('token', token);

      // Clear the form fields on successful registration
      setName('');
      setEmail('');
      setMobile('');
      setPassword('');
      setCPassword('');
      // alert('Registration successful!');
      props.func('Registration Successful!');

      // You can also redirect the user to the login page after successful registration
      // For example: history.push('/login');
    } catch (error) {
      // Handle registration error, e.g., user already exists
      // alert(error.response.data.error);
      props.func('Registration Unsuccessful!');
    }

  };



  return (
    <div>

      <div className='my-10 xl:my-10 w-[300px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-black bg-opacity-80'>

        <div className='mb-10 text-white text-[30px] text-center font-bold'>Registration Form</div>

        <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmitRegistration}>

          <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
            <label className='text-white'>Full Name <span className='text-red-500'>*</span></label>
            <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="text" value={name} onChange={handleNameChange} placeholder='Enter Your Name' required />
          </div>

          <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
            <label className='text-white'>Email <span className='text-red-500'>*</span></label>
            <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="email" value={email} onChange={handleEmailChange} placeholder='Your Email' required />
          </div>

          <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
            <label className='text-white'>Mobile <span className='text-red-500'>*</span></label>
            <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="tel" pattern="[7-9]{1}[0-9]{9}" value={mobile} onChange={handleMobileChange} placeholder='Your Mobile Number' required />
          </div>

          <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
            <label className='text-white'>Password <span className='text-red-500'>*</span></label>
            <div className='pr-2 w-full flex items-center bg-white rounded-lg sm:rounded-xl'>
              <input className="px-2 sm:px-5 py-1 sm:py-2 w-full text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type={showPassword ? "text" : "password"} id="password" value={password} onChange={handlePasswordChange} placeholder='Your Password' required />
              {showPassword ? <VisibilityOffIcon className='cursor-pointer' onClick={handleShowPassword} /> : <VisibilityIcon className='cursor-pointer' onClick={handleShowPassword} />}
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
            <label className='text-white'>Confirm Password <span className='text-red-500'>*</span></label>
            <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="password" value={cpassword} onChange={handleCPasswordChange} placeholder='Your Confirm Password' required />
          </div>

          <button type='submit' className='p-2 text-black rounded-lg text-lg hover:scale-105 duration-300' style={{ color: 'white', fontWeight: '500', backgroundColor: 'rgba(255, 0, 0, 1)', }}>
            Register
          </button>

          <div className='flex space-x-2'>
            <div className='text-white'>Already have an account?</div>
            <Link to='/login'>
              <div className='text-yellow-400 cursor-pointer hover:text-[red]'>Login</div>
            </Link>
          </div>

        </form>
      </div>

    </div>
  );
};

export default RegistrationForm;