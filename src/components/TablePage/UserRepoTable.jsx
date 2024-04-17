import { useEffect, useState } from "react";
import "./UserRepoTable.css";
import axios from "axios";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import RepoSearch from "./RepoSearch";
import RepoShimmer from "./RepoShimmer";
import { useNavigate } from "react-router-dom";

const UserRepoTable = ({ userId, setRepoId }) => {
  const [repos, setRepos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRepos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getUsers/${userId}/repositories`
        );
        console.log(response);
        const repositories = response.data;
        console.log(repositories);
        setRepos(repositories);
        // Set loading to false after fetching repositories
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserRepos();
  }, [userId]);

  // Function to filter repositories based on search input
  const filteredRepositories = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to sort repositories based on the selected option
  const sortRepositories = (repositories, sortBy) => {
    if (sortBy === "name") {
      return [...repositories].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "stars") {
      return [...repositories].sort((a, b) => b.stars - a.stars);
    } else if (sortBy === "forks") {
      return [...repositories].sort((a, b) => b.forks - a.forks);
    } else if (sortBy === "open_issues") {
      return [...repositories].sort((a, b) => b.open_issues - a.open_issues);
    } else {
      return repositories;
    }
  };

  const sortedAndFilteredRepositories = sortRepositories(
    filteredRepositories,
    sortBy
  );

  return (
    <div className="repoTable-container">
      <RepoSearch onSearch={setSearchInput} onSort={setSortBy} />
      <div className="repo-container">
        <div className="repo-inner-container">
          <div className="head-div">
            <h1 className="child-head-name">Name</h1>
            <h1 className="child-head-desc">Description</h1>
            <h1 className="child-head">Stars</h1>
            <h1 className="child-head">Forks</h1>
            <h1 className="child-head">Open Issues</h1>
          </div>
          {/* Conditional rendering based on loading state */}
          {loading ? (
            <RepoShimmer /> // Render RepoShimmer while loading
          ) : (
            <ul>
              {sortedAndFilteredRepositories.map((repo, index) => (
                <div className="repos-div" key={repo.id}>
                  <div className="repo-div">
                    <li className="child-repo-name">{repo.name}</li>
                    <li className="child-repo-desc">
                      <Description desc={repo.description} />
                    </li>
                    <li className="child-repo">{repo.stars}</li>
                    <li className="child-repo">{repo.forks}</li>
                    <li className="child-repo">{repo.open_issues}</li>
                    <FaArrowRightFromBracket
                      className="arrow"
                      title="view details"
                      onClick={() => {
                        navigate(`/repo/${userId}/${repo.name}`);
                        setRepoId(repo.name);
                      }}
                    />
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

function Description({ desc }) {
  const [temp, setTemp] = useState(0);
  if (desc.length < 21) {
    return <div>{desc}</div>;
  }

  return (
    <div>
      {desc.substring(0, 20)}
      {!temp ? (
        <button
          onClick={() => {
            setTemp(1);
          }}
          className="desc-btn"
        >
          ...Read More
        </button>
      ) : (
        <span>
          {desc.substring(20)}{" "}
          <button
            onClick={() => {
              setTemp(0);
            }}
            className="desc-btn"
          >
            ...Read Less
          </button>{" "}
        </span>
      )}
    </div>
  );
}

export default UserRepoTable;
