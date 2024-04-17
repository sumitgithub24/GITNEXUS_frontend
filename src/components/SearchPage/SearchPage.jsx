import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

const SearchPage = ({setUserId}) => {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);
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
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  
  useEffect(() => {
    scrollToTop();
  }, []);
  console.log("Inside Cards", results);
  return (
    <div className="search-page">
      <div className="heading-container">
        <h1 className="search-heading">Explore Github Profiles</h1>
      </div>
      <p className="search-para">
        Discover GitHub users and explore their repositories, contributions, and
        more. Use the search bar below to find users by their username and
        unlock valuable insights into their GitHub journey.
      </p>
      <SearchBar setResults={setResults} />
      <Cards setUserId={setUserId}
        results={
          Array.isArray(results)
            ? results.length > 0
              ? results
              : users
            : results
        }
      />
    </div>
  );
};

export default SearchPage;
