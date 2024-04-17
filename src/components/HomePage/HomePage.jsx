import "./HomePage.css";
import UpperSection from "./UpperSection"
import MainBody from "./MainBody"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const scrollStep = window.scrollY / 20;
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - scrollStep);
        requestAnimationFrame(scrollToTopAnimation);
      }
    };
    requestAnimationFrame(scrollToTopAnimation);
  }
  useEffect(() => {
    scrollToTop();
  }, []);

  

  return (
    <div className='homepage'>
      <UpperSection navigate={navigate}/>
      <MainBody/>
    </div>
  );
};

export default HomePage;
