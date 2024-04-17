import "./MainBody.css";
import firstsvg from "../undraw_progressive_app_m-9-ms.svg";
import secondsvg from "../undraw_performance_overview_re_mqrq .svg";
import { RiDashboardFill } from "react-icons/ri";
import { MdFeaturedPlayList } from "react-icons/md";


const MainBody = () => {
  return (
    <div className="mainBody">
      <section className="upSection">
        <div className="leftDivup">
          <RiDashboardFill className="icons" />
          <h1 className="leftdivHeading">Our Dashboard</h1>
          <p className="leftdivPara">
            Our dashboard offers a user-friendly interface designed to simplify
            <br />
            your GitHub experience. With intuitive search functionality,
            customizable <br />
            filters, and interactive visualizations, you can effortlessly
            navigate <br />
            through user profiles, repositories, and commit history.
          </p>
        </div>
        <div className="rightDivup">
          <img
            src={firstsvg}
            alt="undraw_progressive_app_m-9-ms"
            className="firstsvg"
          />
        </div>
      </section>
      <section className="downSection">
      <div className="rightDivup">
          <img
            src={secondsvg}
            alt="undraw_progressive_app_m-9-ms"
            className="firstsvg"
          />
        </div>
        <div className="leftDivup">
          <MdFeaturedPlayList className="icons2" />
          <h1 className="leftdivHeading">Features Overview</h1>
          <p className="leftdivPara">
            Discover the power of our dashboard's features, including real-time
            repository statistics, contributor insights, commit activity graphs,
            and repository details. Dive deep into each user's GitHub journey
            and gain valuable insights to inform your development process.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
