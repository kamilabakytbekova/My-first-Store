import React from 'react';
import css from './card.module.css'

const Card = (props) => {
    return(
        <div className={css.wrapper}>
            <div className={css.img_wrapper}>
                
                <img src={props.pic}
                alt={props.name}/>
                <span>{props.price} сом</span>
            
            
            </div>

            <div className={css.name_wrapper}>
                <div>{props.name}</div>
                <div>Stars</div>
            </div>
        
        </div>
    )
}

export default Card
