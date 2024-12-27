import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import "./SearchBox.css"


function SearchComponent() {

  

  return (
    <form className="searchBox">
      <input
        className="input-search"
        type="text"
        name="search"
        placeholder="search..."
        required
      />
      
      <button className="btn-search"   >
        <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
      </button>
      <div id="result-search" >

      </div>

    </form>
  );
};
export default SearchComponent;
