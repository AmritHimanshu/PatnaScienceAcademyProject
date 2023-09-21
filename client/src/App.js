import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LottieAnimation from "./components/LottieAnimationLoop";
import Home from "./components/homepage/HomePage";
import NavBar from "./components/nav/NavBar";
import Foundation from "./components/foundation";
import Scholarship from "./components/scholarship";
import JeeApp from "./components/jee/JeeApp";
import NeetApp from "./components/neet/NeetApp";
import Result from "./components/result/Result";
import Enquiry from "./components/enquiry/Enquiry";
import LoginPage from "./components/loginForm/LoginPage";
import RegistrationPage from "./components/registrationForm/RegistrationPage";
import RequestCall from "./components/RequestCall";
import AboutFaculty from "./components/aboutFaculty/AboutFaculty";
import Introduction from "./components/introduction/Introduction";

function App() {

  const [formStatus, setFormStatus] = useState(false);

  const handleCallFrom = () => {
    formStatus ? setFormStatus(false) : setFormStatus(true);
  }

  const pull_data = (data) => {
    if(data === 'false')
    setFormStatus(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/foundation" element={<Foundation />} />
          <Route exact path="/Scholarship" element={<Scholarship />} />
          <Route exact path="/jee" element={<JeeApp />} />
          <Route exact path="/neet" element={<NeetApp />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/enquiry" element={<Enquiry />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
          <Route exact path="/faculty" element={<AboutFaculty />} />
          <Route exact path="/introduction" element={<Introduction />} />
        </Routes>

        {formStatus ? (<div><RequestCall func={pull_data} /></div>):(<div></div>)}
        
        <div className='fixed bottom-[20px] w-[100px] lg:w-[120px] h-[100px] z-10 cursor-pointer' title="Request call" onClick={handleCallFrom} >
          <LottieAnimation animationUrl="https://lottie.host/84e0fcc3-27ba-4fa2-b2d1-ee70904a757d/LIeFI1WkTo.json" />
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
