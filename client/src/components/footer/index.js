import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from '@mui/icons-material/Mail';
import pattern from "./pattern.jpg";

function Footer() {
  return (
    <div
      className="leading-10 mt-2 h-[520px"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
      <div className="bg-black bg-opacity-80 text-black px-5 xl:px-40 py-10 text-left text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="my-5">
          <div className="font-bold text-xl">About Us</div>
          <div className="cursor-default text-sm my-4">
            <Link to="/introduction">Introduction</Link>
          </div>
          <div className="cursor-default text-sm my-4">
            <Link to="/faculty">About Faculty</Link>
          </div>
        </div>

        <div className="my-5">
          <div className="font-bold text-xl">About Exam</div>
          <div className="cursor-default text-sm my-4">
            <a href="https://jeemain.nta.nic.in/about-jeemain-2023/" target="_blank">
              JEE Mains
            </a>
          </div>
          <div className="cursor-default text-sm my-4">
            <a href="https://jeeadv.ac.in/" target="_blank">JEE Advance</a>
          </div>
          <div className="cursor-default text-sm my-4">
            <a href="https://neet.nta.nic.in/information-bulletin/" target="_blank">NEET</a>
          </div>
          <div className="cursor-default text-sm my-4">
            <Link to="/register">
              Registration form
            </Link>
          </div>
          <div className="cursor-default text-sm my-4">Admission Open</div>
        </div>

        <div className="my-5">
          <div className="font-bold text-xl">Contact Us</div>
          <div className="cursor-default text-sm my-4">
            <Link to="/enquiry">
              Contact Us
            </Link>
          </div>
          <div className="cursor-default text-sm my-4">Feedback</div>
        </div>

        <div className="my-5">
          <div className="font-bold text-xl">Useful Links</div>
          <div className="cursor-default text-sm my-4"><Link to="/">Home</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/scholarship">Scholarship</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/foundation">Foundation</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/jee">JEE</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/neet">NEET</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/result">Result</Link></div>
          <div className="cursor-default text-sm my-4"><Link to="/enquiry">Enquiry Now</Link></div>
        </div>

        <div className="my-5 mb-10 md:w-[300px]">
          <div className="font-bold text-xl">Corporate Office</div>
          <div className="text-sm my-4 flex space-x-2">
            <LocationOnIcon className="mr-1" />
            <div>Near Girja Apartment, Bazaar Samiti, Saketpuri, Patna-16</div>
          </div>
          <div className="text-sm my-4 flex space-x-2">
            <LocalPhoneIcon className="mr-1" />
            <div>(+91) 7370884033 / (+91) 7370884066</div>
          </div>
          <div className="text-sm my-4 flex items-center space-x-2">
            <MailIcon className="mr-1" />
            <div className="space-y-2">
              <div>official@patnascienceacademy.com</div>
              <div>info@patnascienceacademy.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
