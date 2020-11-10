import React from 'react';
import "./Home.css";
import { useStateValue } from './StateProvider';

function Home({ id, image, title, description, onChecked, onEdit }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
    // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            description: description
        },
      });
    };


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }


    return (
        <div onClick={() => {
            onChecked(id);
        }} className="home">
            <li className="home__list" key={id}>
              <img className="home__image" alt="beer_image" src={image}></img>
              <div onDoubleClick={() => {onEdit(id)}} className="home__title">
                <p>Title: {title}</p>
                <p>{truncate(description,45)}</p>
              </div>
            </li>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Home;
