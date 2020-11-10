import './App.css';
import Nav from "./Nav";
import axios from "axios";
import { useEffect, useState } from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "./Order";
import Search from "./Search";
// import { getBeers } from "./InfiniteScrollApi";


function App() {

  const [beerList, setBeerList] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   const loadUsers = async () => {
  //     setLoading(true);
  //     const newUsers = await getBeers(page);
  //     setBeerList((prev) => [...prev, ...newUsers]);
  //     setLoading(false);
  //   }
  //   loadUsers();
  // }, [page]);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://api.punkapi.com/v2/beers");
      console.log(request);
      setBeerList(request.data);
      return request;
    }
    fetchData();
  }, [])

  console.log(beerList);

  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight} = event.currentTarget;
  //   console.log('Scrolltop: ', scrollTop);
  //   console.log('ClientHeight: ', clientHeight);
  //   console.log('scrollHeight: ', scrollHeight);
  // }

  const deleteItem = (id) => {
    // console.log("item is deleted");
    setBeerList((prevItems) => {
        return prevItems.filter(
          (beerList, index) => {
            return index!==id;          }
        )
    })
    // console.log(id);
    
  }


  const changeEdit = () => {
    console.log("edit the item");
  }



  return (
   <Router>
    <div className="App">
       <Switch>
          <Route path="/checkout">
            <Nav />
            <Order />
          </Route>
          <Route path="/">
           <Nav />
           <Search />
          
          <ul>
          {beerList.map((beerList, index) => 
            <Home key={index} id={index} image={beerList.image_url} title={beerList.name} description={beerList.description}
            onChecked={deleteItem} onEdit={changeEdit} />
            )} 
          </ul>
          
            
          </Route>
          
       </Switch> 
    </div>
   </Router> 
  );
}

export default App;

