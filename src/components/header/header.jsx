import React from 'react'
import css from './header.module.css'
import basket from './../../img/basket.png'
import logo from './../../img/logo.png'

 const Header = () => {
    return <div className={`${css.wrapper} wrapper`}>
        <div className={css.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={css.menu}>
        <div className={css.items}>Главная</div>
        <div className={css.items}>Категория</div>
        <div className={css.items}>Популярные</div>
        <div className={css.items}>Новинки</div>
        </div>
        <div>
        <div className={css.img}>
            <img src={basket} alt='Basket'/>
        </div>
        </div>
    </div>
}

export default Header