import React from "react";
import { useState } from "react";
import "./LogInSite.css"

function LogInSitePassword(props) {

    const [userName, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const onPasswordChange = event => {
        setPassword(event.target.value);
    };

    function Click() {
        if(password === props.CurrentUser.password){
            props.ChangeSite('PickPeopleCount');
        } else {
            setError(true);
        }
    };


    return (
        <>
            <div className="login_container">

                <img className="car_logo" src={require('../images/car-logo.png')} alt=""></img>


                <h1 className="header1">Miło nam cię poznać {props.CurrentUser.first_name}!</h1>
                <h3 className="header2">Gotów na dzień pełen wrażeń?</h3>
                <p className="header3">Podaj hasło, które jest treści wiadomości mailowej informującej o wygranej.</p>



                <div className="login"> 
                    <input type='text' className='email_and_password_input' placeholder="Hasło" onChange={onPasswordChange}></input>
                    <input type='button' className='continue_button' onClick={Click} value='Dalej'></input>
                    {error === true &&
                        <p className="error">Podano niepoprawe hasło.</p>
                    }
                </div>

                
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

export default LogInSitePassword;