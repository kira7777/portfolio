import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function HomeSocials() {
  return (
    <div className="home-socials">
      <a href="https://github.com/settings/profile" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-eissa-667a231b8/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/ahmed.alkhattip.1" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
}

export default HomeSocials;
