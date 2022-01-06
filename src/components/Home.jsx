import React, { useEffect, useState } from 'react'
import { useResize } from '../helpers/resizeFunction';
import "../styles/home/home.css";
import Header from './Header';
import MobileHeader from './MobileHeader';

export default function Home() {
    //state para controlar el menu de navegacion
    const [actNavBar, setActNavBar] = useState(false);  
    //custom Hook para controlar los modos mobile/tablet/desktop
    let {device} = useResize();

    /* PARA BLOQUEAR EL SCROLL CUANDO EL MENU ESTE DESPLEGADO */    
    useEffect(() => {
        actNavBar ?document.body.style.overflow = "hidden" :document.body.style.overflow = "auto";
    }, [actNavBar]);
    
    return (
        <div className={actNavBar ?"home block" :'home'} onClick={()=>actNavBar && setActNavBar(false)}>
            {device < 750
                ?<MobileHeader actNavBar={actNavBar} setActNavBar={setActNavBar}/>
                :<Header width={device}/>
            }
            <div className="hero">                
                <article className='intro'>
                    <p>SO, YOU WANT TO TRAVEL TO</p>
                    <h2>SPACE</h2>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </article>
                <figure className='planet'>
                    <div className="explore">
                        <p>EXPLORE</p>
                    </div>
                </figure>                
            </div>
        </div>
    )
}
