import React from "react";
import ReactStars from "react-rating-stars-component";
const SearchRate = ({searchRate,setSearchRate}) => {
  
   
  return (
    <div>
      <ReactStars
      value={searchRate}
        count={5}
        size={24}
        activeColor="#ffd700"
        onChange={(value)=>setSearchRate(value)}
        
        
      />
    </div>
  );
};

export default SearchRate;
