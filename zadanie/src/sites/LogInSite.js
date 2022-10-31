import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./LogInSite.css"

function LogInSite( props ) {


    const [users, setUsers] = useState();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost/users.php`)
            .then(res => {
                setUsers(res);
                console.log(res.data.users);
            }
        )
    },
    []);

    const onEmailChange = event => {
        setEmail(event.target.value);
    };

    function Click() {
        for( let i = 0; i < users.data.users.length; i++){
            setError(true);
            if(users.data.users[i].email === email)
            {
                props.ChangeSite('LoginEmailPassword');
                props.ChangeUser(users.data.users[i]);
                setError(false);
            }
        }
    };


    return (
        <>
            <div className="login_container">
                <img className="car_logo" src={require('../images/car-logo.png')} alt=""></img>


                <p className="header1">Zrealizuj swoją nagrodę!</p>
                <p className="header2">Gotowi na dzień pełny wrażeń?</p>
                <p className="header3">Nagroda obejmuję przejazd maksymalnie 6 osób klasycznymi Porsche 911 <br/>paradzie samochodów na festiwalu Classic Cars Poland.</p>
                

                <div className="login"> 
                    <input type='text' className='email_and_password_input' placeholder="Email" onChange={onEmailChange}></input>
                    <input type='button' className='continue_button' onClick={Click} value='Dalej'></input>
                    {error === true &&
                        <p className="error">Podano niepoprawny email.</p>
                    }
                </div>

                <div className="links_container">
                    <a href="">Kontakt</a>
                    <a href="">O festiwalu</a>
                    <a href="">Regulamin</a>
                </div>
            </div>
            <img className="car_image" src={require('../images/porsche911.png')}></img>
        </>
    );
}

export default LogInSite;