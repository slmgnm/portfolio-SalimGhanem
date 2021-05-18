import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div className="social-div">
      <p className="social-container">
        <a
          href="https://www.instagram.com/slmgnm/"
          target="_blank"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="xs"  />
        </a>
        <a
          href="https://github.com/slmgnm"
          target="_blank"
          className="facebook social">
          <FontAwesomeIcon icon={faGithub} size="xs" />
        </a>
        <a
          href="http://www.linkedin.com/in/slmgnm"
          target="_blank"
          className="twitter social">
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
        </a>
      </p>
    </div>
  );
}
