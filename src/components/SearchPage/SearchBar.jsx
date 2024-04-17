import { useState, useEffect } from "react";
import "./SearchBar.css";
import axios from "axios";
const SearchBar = ({ setResults}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.trim() !== "") {
      const timer = setTimeout(() => {
        fetchData(input);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [input, setResults]);


  const fetchData = async (value) => {
    try{
    const response = await axios.get(`http://localhost:3000/getUsers/${value}`);
    const results = response.data;
    console.log(results);
    setResults(results);
    }
    catch(err){
      console.log("data error---------->",err)
    }
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  return (
    <div className="Card">
      <div className="CardInner">
        <label>Search for your desired user</label>
        <div className="container">
          <div className="Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="InputContainer">
            <input
              placeholder="It just can't be empty..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
