import image from "../daniel-olah-dFA5XycbhoQ-unsplash.jpg";
import "./UpperSection.css";
import { useNavigate } from "react-router-dom";

const UpperSection = ({ navigate }) => {
  
  return (
    <div className="upper-section">
      <img src={image} className="image"></img>
      <div className="desc">
        <h1 className="desc-heading">
          Discover GitHub User <div className="insights">Insights</div>Explore
          and Engage
        </h1>
        <h3 className="desc-para">
          Explore GitHub user stats with ease! Search for a username and dive
          into insightful analytics, repository details, commit history, and
          more. Start exploring now!
        </h3>
        <button
          className="upper-btn"
          onClick={() => {
            navigate("/search");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default UpperSection;
