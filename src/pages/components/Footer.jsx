import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-60 py-20 justify-between p-5">
      <div className="justify-center md:w-[30%]">
        <p className="text-blue-600 font-bold text-lg">Julius</p>
        <p className="text-xs font-light text-gray-500 mt-2">
          Early stage AI lab based in San Francisco with a mission to build the
          most powerful AI tools for knowledge workers.
        </p>
        <div className="flex justify-start gap-x-4 text-gray-500 mt-4">
          <FaXTwitter size={20} />
          <BsDiscord size={20} />
          <CiLinkedin size={20} />
          <FaGithub size={20} />
        </div>
        <button className="underline underline-offset-2 text-xs text-gray-500 mt-4">
          Contact Us
        </button>
      </div>
      <div className="flex mt-4 lg:w-[65%] gap-x-12">
        <div>
          <p className="text-sm font-semibold">Company</p>
          <div className="flex flex-col text-xs font-light text-gray-500 gap-y-4 mt-4">
            <a href="#">
              <p>Careers</p>
            </a>
            <a href="#">
              <p>Affiliate Program</p>
            </a>
            <a href="#">
              <p>Privacy Policy</p>
            </a>
            <a href="#">
              <p>Edu Ambassador Program</p>
            </a>
            <a href="#">
              <p>Index</p>
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Resources</p>
          <div className="flex flex-col text-xs font-light text-gray-500 gap-y-4 mt-4">
            <a href="#">
              <p>Community</p>
            </a>
            <a href="#">
              <p>Capabilities</p>
            </a>
            <a href="#">
              <p>Use Cases</p>
            </a>
            <a href="#">
              <p>Glossary</p>
            </a>
            <a href="#">
              <p>FAQs</p>
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Guides</p>
          <div className="flex flex-col text-xs font-light text-gray-500 gap-y-4 mt-4">
            <a href="#">
              <p>Tips</p>
            </a>
            <a href="#">
              <p>Videos</p>
            </a>
            <a href="#">
              <p>Start Guides</p>
            </a>
            <a href="#">
              <p>Structuring Data</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Tools</p>
          <div className="flex flex-col text-xs font-light text-gray-500 gap-y-4 mt-4">
            <a href="#">
              <p>AI Detector</p>
            </a>
            <a href="#">
              <p>Graph Maker</p>
            </a>
            <a href="#">
              <p>Math AI</p>
            </a>
            <a href="#">
              <p>Statistical Software</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
