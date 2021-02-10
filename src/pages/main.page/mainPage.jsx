import React from 'react'
import Card from '../../components/card/card'
import css from './main.module.css'


const MainPage = (props) => {
    const arr = [
        {
            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCQ8ultDK4KTw-bXjLQIfQdfg6lMWTmz5kQ&usqp=CAU',
            price: 1500,
            name:'Black dress'
            },

           {
             
            pic: 'https://s.sellercheck.ru/pic/b8/14/biseropletenie-vypusknye-platya-2019-v-obraznyy-vyrez-rozovyy-vysokiy-razrez-b81414809662b0caa8d37571ceedba94-500.jpg',
            price: 3200,
            name: 'Rose dress'

            },

            {

            pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnTbZorWnbFXymv_WgaZMfHSrqiPFdUxQ3Q&usqp=CAU',
            price: 4100,
            name: 'Velvet dress'
        }
    ]
    return (

      
      <div className={css.img_wrapper}>
  

      <div className={`${css.img_slider} wrapper`}>

              <div className={css.text}>
              <h1>Some header  Text</h1>
              <p>Some text</p>
              <button>Купить сейчас</button>
              </div>
              
              
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDPhCsCusZ1D4LAxsY96CtoWyY_ypPMa7FQ&usqp=CAU" alt="Dress"/>

          </div>

          <div className={`${css.main_img} wrapper`}>
          
          <h1>Some Header texjhgjt</h1>
          
          <div className={css.main_img1}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7TfkBe12af_2B046Yaijhsyq0kp8jDaCYw&usqp=CAU" alt="T-shirt "/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ91WcOTSu1LG3pZ8fLU7x0nX2ySunoHj7Rg&usqp=CAU" alt="T-shirt"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-q8psxEb8ptIlUh2IlJNtPG1F4zKIaeslw&usqp=CAU" alt="T-shirt"/>
          </div>
        
        </div>

        <div className={`${css.wrapper} wrapper`}>
          
            {
              arr.map( (item) => {
                return <Card name={item.name} pic={item.pic} price={item.price} />
              })
              
            }
            </div>
            </div>
        
        
      
    )}

export default MainPage