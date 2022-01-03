import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header/header.css"

export default function Header() {
    return (
        <div className='header'>
            <img src="https://image.shutterstock.com/image-vector/shine-icon-clean-star-600w-1346205074.jpg" alt="" />            

            <section className='nav-bar'>
                <hr />   
                <nav>
                    <Link to=""><span>00 </span>HOME</Link>
                </nav>
                <nav>
                    <Link to=""><span>01 </span>DESTINATION</Link>
                </nav>
                <nav>
                    <Link to=""><span>02 </span>CREW</Link>
                </nav>
                <nav>
                    <Link to=""><span>03 </span>TECHNOLOGY</Link>
                </nav>
            </section>
        </div>
    )
}
