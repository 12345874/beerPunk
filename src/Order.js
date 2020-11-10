import React from 'react';
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';
import FlipMove from "react-flip-move";

function Order() {

    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="order">
            <div className="order__center">
                    <h2 className="order__title">
                        Your Beer Basket:<strong>({basket?.length} items)</strong> 
                        <FlipMove>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                />
                            ))}
                        </FlipMove>
                    </h2>
            </div>
        </div>
    )
}

export default Order;
