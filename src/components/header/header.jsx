import React from 'react'
import css from './header.module.css'
import basket from './../../img/basket.png'
import logo from './../../img/logo.png'
import {Link} from 'react-router-dom'

 const Header = () => {
    return <div className={`${css.wrapper} wrapper`}>
        
        <Link to = {'/'} className={css.logo}>
            <img src={logo} alt="logo"/>
        </Link>
        <div className={css.menu}>
        <div className={css.items}>Главная</div>
        <div className={css.items}>Категория</div>
        <div className={css.items}>Популярные</div>
        <div className={css.items}>Новинки</div>
        </div>
        <div>
        <Link to = {'/basket'}className={css.img}>
            <img src={basket} alt='Basket'/>
          </Link> 
        </div>
    </div>

}

export default Header