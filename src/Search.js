import React, { useEffect, useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Beer from './Beer';

function Search() {

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
        if(event.target.value === "") {
            setSearch("");
            setBeer("");
        }
        
          }

    return (
        <div className="search">
            <div className="search__section">
              <input placeholder="Search Beer here..." value={search} onChange={updateSearch} className="search__input" type="text" />
              <SearchIcon className="search__icon" />
            </div>
            <div className="search__item">
             {beer &&
              beer.map(
                item=>(
                 <Beer
                 key={item.id}
                 title={item.name}   
                 image = {item.image_url} 
                 description = {item.description}
                 />
               )
              )
             }
            </div>
        </div>
    )
}

export default Search;
