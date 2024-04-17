import "./SearchResult.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";


const SearchResult = ({ result, setUserId }) => {
  console.log();
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={result.avatar_url} />
            </div>
            <div className="team-content">
              <h4 className="title">{result.login}</h4>
              <Link
        to={result.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
              <div className="linked">
              
              <FaGithub />
              <h3 className="name">{result.name || 'Github'}</h3>
              </div>
              </Link>
            </div>
            <ul className="social">
              <li onClick={() => setUserId(result.login)}>
                <Link
                  to={`/repo/${result.login}`}
                  
                >
                  See Stats
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
