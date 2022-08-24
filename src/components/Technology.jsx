import React, {useEffect,useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useResize } from '../helpers/resizeFunction';
import Header from './Header';
import MobileHeader from './MobileHeader';
import "../styles/styles.css";


export default function Technology({isd,ism,data}) {
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
        <div className='technology' onClick={()=>actNavBar && setActNavBar(false)}> 
            {device < 750
                ?<MobileHeader actNavBar={actNavBar} setActNavBar={setActNavBar}/>
                :<Header width={device}/>
            }

            <div className="hero">
                <article className='content'>
                    <section className='page_title'>
                        <h2><span>03 </span>SPACE LAUNCH 101</h2>
                    </section>

                    <figure className='image-mobile'>
                        <img src={ism} alt="img"/>            
                    </figure>

                    <section className='main_content'>
                        <nav className='nav-bar'>
                            <Link to="/technology/launch-vehicle"><span className={location === "/technology/launch-vehicle" ?"active" :undefined}>1</span></Link>
                            <Link to="/technology/spaceport"><span className={location === "/technology/spaceport" ?"active" :undefined}>2</span></Link>
                            <Link to="/technology/space-capsule"><span className={location === "/technology/space-capsule" ?"active" :undefined}>3</span></Link>                                
                        </nav>

                        <article>
                            <p>THE TERMINOLOGY...</p>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                        </article>
                    </section>
                </article>

                <figure className='image-desktop'>
                    <img src={isd} alt="" />
                </figure>
            </div>
        </div>
    )
}
