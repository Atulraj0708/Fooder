import React from 'react'
import '../css/home-cards.css'
import HomeInfoCardContainer from './HomeInfoCardContainer'

function Home() {
    return (
        <div>
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src="https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?w=1060&t=st=1668350632~exp=1668351232~hmac=90afbd8730f89a27d989b915d4f491f56e7248680a156c0cdc6f336445830a6f" alt="home-banner"/>
        </div>
            <HomeInfoCardContainer/>
        </div>
    )
}

export default React.memo(Home)
