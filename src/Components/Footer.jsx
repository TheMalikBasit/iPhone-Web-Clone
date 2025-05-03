import { footerLinks } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="text-gray font-semibold text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an apple store</span> or{" "}
            <span className="underline text-blue">other relailer </span>
            near you.
          </p>
          <p className="text-gray font-semibold text-xs">Or call 1122-15-911</p>
        </div>
        <div className="bg-neutral-700 h-[1px] my-5 w-full" />
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <p className="text-gray font-semibold text-xs">Copyright @ 2025 Apple Inc. All rights reserved.</p>
          </div>
          <div className="flex">
            {footerLinks.map((item, i) => (
              <p key={item} className="text-gray font-semibold text-xs">
                {item}{" "}{i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral-700 my-5"/>
        <div className="flex flex-col md:flex-row justify-between">
          <a className="text-gray font-semibold text-xs flex items-center my-2" href="https://github.com/TheMalikBasit"><FontAwesomeIcon className="mr-5" icon={faGithub} size="2x" />github.com/TheMalikBasit</a>
          <a className="text-gray font-semibold text-xs flex items-center my-2" href="https://www.linkedin.com/in/malik-abdul-basit-24b634267/"><FontAwesomeIcon className="mr-5" icon={faLinkedin} size="2x" />linkedin.com/in/malik-abdul-basit</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
