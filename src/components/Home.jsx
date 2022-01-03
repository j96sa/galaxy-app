import React from 'react'
import "../styles/home/home.css";
import MobileHeader from './MobileHeader';

export default function Home() {
    return (
        <div className='home'>
            <MobileHeader/>
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
