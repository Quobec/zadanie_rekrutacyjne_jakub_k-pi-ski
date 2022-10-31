import React, { useEffect } from "react";
import { useState } from "react";
import "./LogInSite.css"

function PickPeopleCount( props ) {


    const [adults, setAdults] = useState(0);
    const [fiveToTwelve, setFiveToTwelve] = useState(0);
    const [belowFour, setbelowFour] = useState(0);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice( (adults * 80) + (fiveToTwelve * 80 * 0.5) + (belowFour * 80 * 0.1) );
    },
    [adults, fiveToTwelve, belowFour]);


    return (
        <>
            <div className="login_container">
                <img className="car_logo" src={require('../images/car-logo.png')} alt=""></img>


                <h1 className="header1">Kto z tobą jedzie?</h1>
                <h3 className="header2">Wybierz do 6 osób</h3>
                
                <div className="people_container">
                    <div className="text">Osoby dorosłe</div>
                    <div className="counter">
                        <div className="minus" onClick={() => {if(adults>0){setAdults(adults -1); setAmount(amount-1)}}}>-</div>
                        <div className="count">{adults}</div>
                        <div className="minus" onClick={() => {if(amount<6 && amount<6){setAdults(adults +1); setAmount(amount+1)}}}>+</div>
                    </div>
                </div>

                <div className="people_container">
                    <div className="text">Dzieci od 5 do 12 lat</div>
                    <div className="counter">
                        <div className="minus" onClick={() => {if(fiveToTwelve>0){setFiveToTwelve(fiveToTwelve -1); setAmount(amount-1)}}}>-</div>
                        <div className="count">{fiveToTwelve}</div>
                        <div className="minus" onClick={() => {if(fiveToTwelve<6 && amount<6){setFiveToTwelve(fiveToTwelve +1); setAmount(amount+1)}}}>+</div>
                    </div>
                </div>

                <div className="people_container">
                    <div className="text">Dzieci do 4 lat</div>
                    <div className="counter">
                        <div className="minus" onClick={() => {if(belowFour>0){setbelowFour(belowFour -1); setAmount(amount-1)}}}>-</div>
                        <div className="count">{belowFour}</div>
                        <div className="minus" onClick={() => {if(belowFour<6 && amount<6){setbelowFour(belowFour +1); setAmount(amount+1)}}}>+</div>
                    </div>
                </div>

                <div className="price">Cena: {price.toFixed(2)} zł</div>

                
                <div className="links_container">
                    <a href="">Kontakt</a>
                    <a href="">O festiwalu</a>
                    <a href="">Regulamin</a>
                </div>

            </div>
            <img className="car_image" src={require('../images/porsche911.png')} alt=""></img>
        </>
    );
}

export default PickPeopleCount;