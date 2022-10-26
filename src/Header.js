import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <form className="Header">
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control form"
            placeholder="Type your city here"
            id="city-name"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-dark"
            id="search_button"
          />
        </div>
      </div>
    </form>
  );
}
