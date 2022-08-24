import React, { useEffect, useState } from 'react'
import MobileHeader from './MobileHeader'
import "../styles/styles.css";
import { useResize } from '../helpers/resizeFunction';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';


export default function Destination({data,img}) {    
    const {description,distance,name,travel} = data;
    //state para controlar el menu de navegacion
    const [actNavBar, setActNavBar] = useState(false);
    //custom Hook para controlar los modos mobile/tablet/desktop
    let {device} = useResize();
    //para activar el efecto de seccion activa
    const location = useLocation().pathname;

    /* PARA BLOQUEAR EL SCROLL CUANDO EL MENU ESTE DESPLEGADO */    
    useEffect(() => {
        actNavBar ?document.body.style.overflow = "hidden" :document.body.style.overflow = "auto";
    }, [actNavBar]);

    return (
        <div className='destination' onClick={()=>actNavBar && setActNavBar(false)}>
            {device < 750
                ?<MobileHeader actNavBar={actNavBar} setActNavBar={setActNavBar}/>
                :<Header width={device}/>
            }            
            <div className="hero">
                <section className="planet">                        
                    <h2><span>01</span> PICK YOUR DESTINATION</h2>
                    <figure className="planet-img">
                        <img src={img} alt={img} />
                    </figure>
                </section>
                <section className="content">                
                    <ul className='nav-bar'>
                        <li className={location === "/destination/moon" ?"active" :undefined}><Link to="/destination/moon">MOON</Link></li>
                        <li className={location === "/destination/mars" ?"active" :undefined}><Link to="/destination/mars">MARS</Link></li>
                        <li className={location === "/destination/europa" ?"active" :undefined}><Link to="/destination/europa">EUROPA</Link></li>
                        <li className={location === "/destination/titan" ?"active" :undefined}><Link to="/destination/titan">TITAN</Link></li>
                    </ul>
                    <h2>{name}</h2>     
                    <p className='description'>{description}</p>
                    <section className='distance'>
                        <p><span>AVG. DISTANCE</span> {distance}</p>
                        <p><span>EST. TRAVEL TIME</span> {travel}</p>
                    </section>
                </section>
            </div>
        </div>
    )
}
