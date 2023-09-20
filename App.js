import React from 'react';
import ReactDOM from 'react-dom/client';
const Title = ()=>{
    return (
       
        <a href="/">
            <img 
            className='logo'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU"
            alt = "Logo"
            /> 
        </a>
        
        

    )
}
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const BuregrKing ={
    name:"Burger King",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/17/81/6d/71/lassen-sie-sich-keinen.jpg",
    cusines : ["Burger","American"],
    rating : "4.2"
}
const RestaurantCard = () => {
    return(
        <div className='card'>
            <img src = {BuregrKing.image}/>
            <h2>{BuregrKing.name}</h2>
            <h3>{BuregrKing.cusines.join(",")}</h3>
            <h4>{BuregrKing.rating}</h4>
            
        </div>
    )
}
const Body = () => {
    return  (
        <div className='body'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    )
}
const Footer = ()=> {
    return (
        <h1>footer</h1>

    )
}
const Applayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
            
        </>
        
    )
 
}

const root  = ReactDOM.createRoot(document.getElementById("container"));
root.render(<Applayout/>);
