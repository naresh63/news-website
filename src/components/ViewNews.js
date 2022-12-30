import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

function ViewNews() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
       
      <div className="news-detail">
        <h2> {state.title}</h2>
        <img src={state.urlToImage} />
        <p> {state.description}</p>
      </div>
      <button className="back-btn" onClick={() => navigate(-1)}> BACK</button>
    </div>
  );
}

export default ViewNews;
