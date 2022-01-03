import React from 'react'
import "../styles/header/mobile-header.css"
import logo from "../assets/starter-code/shared/logo.svg";
import hamburguesa from "../assets/starter-code/shared/icon-hamburger.svg";
import close from "../assets/starter-code/shared/icon-close.svg";



export default function MobileHeader() {
    return (
        <div className='mh'>
            <img src={logo} alt="logo" />
            <img src={hamburguesa} alt="menu" />
        </div>
    )
}
