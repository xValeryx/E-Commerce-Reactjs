import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {FaShoppingCart}  from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value  = event.target.value;
    setSearch(value);
    props.searching(value);

  };


  return (
    <header className="header">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5milecavemovie.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fwhite-amazon-logo-white.png&f=1&nofb=1" alt="e-commerce-logo" />
      <form className="form-search">
        <input className="search-input"
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
          
        />
        <button className="searchBtn"> <FaSearch/></button>
        
      </form>

      <div className="iconsWrap">

       <FaUserAlt/>
       <FaShoppingCart/>
    
      </div>
    </header>
  );
};
