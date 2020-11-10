import React from 'react';

const Beer = ({id, title,  image , description })=>{
    return(
        <div className="beer">
            <div className="beer__title">{title}
            </div>
            <div className="beer__section">
                <img src={image} alt="Not found" className="beer__image"></img>
               <div className="beer__description">
                <p>{description}</p>
               </div>
            </div>
        </div>
    ) ; 
} ; 
export default Beer;