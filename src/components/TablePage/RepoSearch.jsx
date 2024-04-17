// RepoSearch.js
import { useState } from "react";
import "./RepoSearch.css";

const RepoSearch = ({ onSearch, onSort }) => {
    const [input, setInput] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        onSearch(value); // Call the onSearch function with the input value
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setSelectedOption(value);
        onSort(value); // Call the onSort function with the selected value
    };

    return (
        <div className="repo-Card">
            <div className="repo-CardInner">
                <label className="repo-label">Search for your desired user</label>
                <div className="repo-search-container">
                    <div className="repo-Icon">
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
                            className="repo-feather repo-feather-search"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <div className="repo-InputContainer">
                        <input
                            className="repo-input"
                            placeholder="It just can't be empty..."
                            value={input}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="repo-dropdown">
                        <select
                            className="repo-select"
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value="">Sort By</option>
                            <option value="name">Name</option>
                            <option value="stars">Stars</option>
                            <option value="forks">Forks</option>
                            <option value="open_issues">Open Issues</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepoSearch;
