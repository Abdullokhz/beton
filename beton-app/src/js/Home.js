import React from 'react'
import '../css/Home.css'
import iphone from '../img/iphone.jpeg'
import pizza1 from '../img/pizza1.jpeg'
import pizza2 from '../img/pizza2.jpeg'
import ag from '../img/appgallery.jpeg'
import ap from '../img/appstore.jpeg'
import ge from '../img/getapps.jpeg'
import go from '../img/googleplay.jpeg'
import ru from '../img/rustore.jpeg'
import {BsArrowRight} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="baner">
            <div className="b-left">
                <div className="dum">
                <img className='ip' src={iphone} alt="" /></div>
                <div className="k-dum"></div>
            </div>
            <div className="orta">
                <h1><span>Купить бетон</span> также просто, <br />как заказать пиццу</h1>
                <p>Скачивай наше приложение!</p>
            </div>
            <div className="progg">
                <img src={ag} alt="" />
                <img src={ap} alt="" />
                <img src={ge} alt="" />
                <img src={go} alt="" />
                <img src={ru} alt="" />
                <img src={ag} alt="" />
            </div>
            <div className="b-right">
                <img className='piz2' src={pizza2} alt="" />
                <img className='piz1' src={pizza1} alt="" />
            </div>
            <div className="dale"><BsArrowRight className='icc'/></div>
        </div>
      </div>
    </div>
  )
}
