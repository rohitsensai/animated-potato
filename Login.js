import React from "react";
import './Login.css';
import { loginUrl } from "./spotify";
function Login(){
    return(
        <div className="login">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eEdOcMPshs0XmZmR_oVhNI9FxeVsfOROmg7FIZJIEHhCaMNPP
           Pko-Vbg6CmRBz08A_I&usqp=
           CAU" />
       {/**Login with Spotify button */}
       <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login