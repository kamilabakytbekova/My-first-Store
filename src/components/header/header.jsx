import React from 'react'
import './header.css'
import basket from './../../img/add-to-basket.png'


 const Header = () => {
    return <div className={'header__wrapper wrapper'}>
        <div>LOGO</div>
        <div className={'menu__wrapper'}>
        <div className={'menu__items'}>Главная</div>
        <div className={'menu__items'}>Категория</div>
        <div className={'menu__items'}>Популярные</div>
        <div className={'menu__items'}>Новинки</div>
        </div>
        <div>
        <div className={'img__wrapper'}>
            <img src={basket} alt='Basket'/>
        </div>
        </div>
    </div>
}

export default Header