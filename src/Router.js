import React from 'react'
import {HashRouter, Route, Routes} from "react-router-dom"
import Destination from './components/Destination'
import Home from './components/Home'
import jsonData from "./assets/data.json";

//PLANETS IMGAES
import moon from "./assets/starter-code/destination/image-moon.webp"
import europa from "./assets/starter-code/destination/image-europa.webp"
import mars from "./assets/starter-code/destination/image-mars.webp"
import titan from "./assets/starter-code/destination/image-titan.webp"
import Crew from './components/Crew';

//CREW IMAGES
import commander from "./assets/starter-code/crew/image-douglas-hurley.webp"
import missionspecialist from "./assets/starter-code/crew/image-mark-shuttleworth.webp"
import pilot from "./assets/starter-code/crew/image-victor-glover.webp"
import flightengineer from "./assets/starter-code/crew/image-anousheh-ansari.webp"


export default function router() {
    return (
        <HashRouter>            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                
                {/* DESTINATION */}
                <Route exact path="/destination/moon" element={<Destination img={moon} data={jsonData.destinations[0]}/>} />
                <Route exact path="/destination/mars" element={<Destination img={mars} data={jsonData.destinations[1]}/>} />
                <Route exact path="/destination/europa" element={<Destination img={europa} data={jsonData.destinations[2]}/>} />
                <Route exact path="/destination/titan" element={<Destination img={titan} data={jsonData.destinations[3]}/>} />                
                
                {/* CREW */}
                <Route path="/crew/commander" element={<Crew img={commander} data={jsonData.crew[0]}/>}/>
                <Route path="/crew/mission-specialist" element={<Crew img={missionspecialist} data={jsonData.crew[1]}/>}/>
                <Route path="/crew/pilot" element={<Crew img={pilot} data={jsonData.crew[2]}/>}/>
                <Route path="/crew/flight-engineer" element={<Crew img={flightengineer} data={jsonData.crew[3]}/>}/>
            </Routes>
        </HashRouter>
    )
}
