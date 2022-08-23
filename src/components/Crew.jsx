import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useResize } from '../helpers/resizeFunction';
import "../styles/var.css";
import Header from './Header';
import MobileHeader from './MobileHeader';


export default function Crew({data,img}) {
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

    const HeroMobile = ({data,img})=>{        
        return(
            <div className='hero'>
                <h2><span>02 </span> MEET YOUR CREW</h2>
                <img src={img} alt="img" />
                <section className='nav-bar'>
                    <Link to="/crew/commander"><figure className={location === "/crew/commander" ?"active" :undefined}></figure></Link>
                    <Link to="/crew/mission-specialist"><figure className={location === "/crew/mission-specialist" ?"active" :undefined}></figure></Link>
                    <Link to="/crew/pilot"><figure className={location === "/crew/pilot" ?"active" :undefined}></figure></Link>
                    <Link to="/crew/flight-engineer"><figure className={location === "/crew/flight-engineer" ?"active" :undefined}></figure></Link>
                </section>
                <section className='content'>
                    <p>{data.role}</p>
                    <h2>{data.name}</h2>
                    <p>{data.bio}</p>
                </section>  
            </div>
        )
    }

    const Hero = ({data,img})=>{
        return(
            <div className="hero">
                <section className="content">
                    <h2><span>02 </span> MEET YOUR CREW</h2>                    

                    <article>
                        <p>{data.role}</p>
                        <h2>{data.name}</h2>
                        <p>{data.bio}</p>
                    </article>
                    
                    <section className='nav-bar'>
                        <Link to="/crew/commander"><figure className={location === "/crew/commander" ?"active" :undefined}></figure></Link>
                        <Link to="/crew/mission-specialist"><figure className={location === "/crew/mission-specialist" ?"active" :undefined}></figure></Link>
                        <Link to="/crew/pilot"><figure className={location === "/crew/pilot" ?"active" :undefined}></figure></Link>
                        <Link to="/crew/flight-engineer"><figure className={location === "/crew/flight-engineer" ?"active" :undefined}></figure></Link>
                    </section>
                </section> 

                <section className="image">
                    <img src={img} alt="img" />
                </section>
            </div>
        )
    };

    return (
        <div className='crew' onClick={()=>actNavBar && setActNavBar(false)}>
            {device < 750
                ?<MobileHeader actNavBar={actNavBar} setActNavBar={setActNavBar}/>
                :<Header width={device}/>
            }
            {device < 750 ?<HeroMobile img={img} data={data}/> :<Hero img={img} data={data}/>}                        
        </div>
    )
}
