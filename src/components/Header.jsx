import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/header/header.css"

export default function Header({width}) {
    const desktop = width>1200;
    //para controlar la seccion activa
    const location = useLocation();
    
    return (
        <div className='header'>
            <img src="https://image.shutterstock.com/image-vector/shine-icon-clean-star-600w-1346205074.jpg" alt="" />            

            <section className='nav-bar'>
                {desktop && <hr />}
                <nav className={location.pathname === "/" && "active"}>
                    <Link to="">{desktop && <span>00 </span>}HOME</Link>
                </nav>
                <nav /* className={location.pathname === "/" && "active"} */>
                    <Link to="">{desktop && <span>01 </span>}DESTINATION</Link>
                </nav>
                <nav /* className={location.pathname === "/" && "active"} */>
                    <Link to="">{desktop && <span>02 </span>}CREW</Link>
                </nav>
                <nav /* className={location.pathname === "/" && "active"} */>
                    <Link to="">{desktop && <span>03 </span>}TECHNOLOGY</Link>
                </nav>
            </section>
        </div>
    )
}
