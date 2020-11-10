import React, { useEffect, useState } from 'react';
import "./Nav.css";
// import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Nav({ id, image, title, description }) {

    const [{ basket }, dispatch] = useStateValue();

    const [search, setSearch] = useState("");
    const [beer, setBeer] = useState([]);

  
    const Server__Name = "https://api.punkapi.com/v2/beers?beer_name=";

    useEffect(() => {
      console.log("Server is running...")
        getBeers();
    }, [search])
    
    const getBeers = async () => {
      if (search==null || search=="") {
        var response = await fetch("");
      } else {
        var response = await fetch(Server__Name + search);
      }

      const data = await response.json();
      console.log(data[0]);
      setBeer(data);
    }

    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
        setSearch("");
        setBeer("");
          }

    return (
        <div className = "nav">
            {/* logo text section */}
            <Link to="/">
            <div className="nav__logo">
              <h2>BEANS LOVE BEERS</h2>
            </div>
            </Link>
            
            {/* search section  */}
            {/* <div className="nav__search">
              <input value={search} onChange={updateSearch} className="nav__searchInput" type="text" />
              <SearchIcon className="nav__searchIcon" />
            </div> */}
           

            <div className="nav__option">
                <span>Home</span>
            </div>
            <div className="nav__option">
                <span>Favourites</span>
            </div>
            <Link to="/checkout">
            <div className="nav__countItem">
              <ShoppingBasketIcon />
              <span className="nav__items">
                {basket?.length}
              </span>
            </div>
            </Link>

        </div>
    )
}

export default Nav;
