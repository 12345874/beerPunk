import React, { forwardRef } from 'react'
import { useStateValue } from './StateProvider';
import "./CheckoutProduct.css";

const CheckoutProduct = forwardRef(({ id, image, title, description }, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      //remove item from basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };


    return (
      <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__description">{description}</p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    )
 }
);
export default CheckoutProduct;
