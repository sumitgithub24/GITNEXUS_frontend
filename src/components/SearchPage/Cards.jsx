import SearchResult from "./SearchResult";
import "./Cards.css";
import Shimmer from "./Shimmer.jsx";
import { useEffect, useState } from "react";

const Cards = ({ results, setUserId }) => {
  // console.log("inside cards",results);
  
  const [showNoCards, setShowNoCards] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoCards(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showNoCards ) {
    return (
      <div className="results-list">
        {[...Array(30)].map((_, id) => (
          <Shimmer key={id} />
        ))}
      </div>
    );
  }
  return (
    <div className="results-list">
      
    {results.map((result, id) => {
      return <SearchResult setUserId={setUserId} result={result} key={id} />;
    })}
    </div>
  );
};

export default Cards;
