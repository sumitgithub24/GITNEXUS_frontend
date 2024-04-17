import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Footer = ({ navigate }) => {
  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const scrollStep = window.scrollY / 20;
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        requestAnimationFrame(scrollToTopAnimation);
      }
    };
    requestAnimationFrame(scrollToTopAnimation);
  };

  return (
    <div className="footer">
      <div className="links">
        <p
          className="links-items"
          onClick={() => {
            if (window.location.pathname === "/") {
              scrollToTop();
            } else {
              navigate("/");
            }
          }}
        >
          Home
        </p>
        <p
          className="links-items"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </p>
      </div>
      <div className="socials-links">
        <BsTwitterX className="socials-links-items" />
        <VscGithub className="socials-links-items" />
      </div>
      <div className="copyright-claim">
        <p>Copyright © 2024 - All rights reserved by GitNexus</p>
      </div>
    </div>
  );
};

export default Footer;
