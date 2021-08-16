import React, { useEffect } from "react";
import { getAllRecipes, getAllDiets } from "../../redux/actions/index.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage({ getAllRecipes, getAllDiets }) {
  useEffect(() => {
    getAllRecipes();
    getAllDiets();
  }, [getAllRecipes, getAllDiets]);

  return (
    <div className="lp">
      <div id="info">
        <h1 className="inf">
          <strong>Discover the world's recipes</strong>
        </h1>
        <button className="welcome-btn">
          <Link className="link" to="/home">
            <strong>Welcome</strong>
          </Link>
        </button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getAllRecipes: () => dispatch(getAllRecipes()),
    getAllDiets: () => dispatch(getAllDiets()),
  };
}

export default connect(null, mapDispatchToProps)(LandingPage);
