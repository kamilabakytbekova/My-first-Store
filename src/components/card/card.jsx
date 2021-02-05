import React from 'react';
import css from './card.module.css'

const Card = () => {
    return(
        <div className={css.wrapper}>
            <div className={css.img_wrapper}>
                <img src="https://www.britishretro.co.uk/wp-content/uploads/2018/12/50s-black-swing-dress-001.jpg" alt="Dress"/>
            <span>3750 сом</span>
            
            </div>

            <div className={css.name_wrapper}>
                <div>Dress</div>
                <div>Stars</div>
            </div>
        
        </div>
    )
}

export default Card
