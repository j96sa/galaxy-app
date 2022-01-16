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
import Technology from './components/Technology';

//TECHNOLOGY IMAGES
import lvm from "./assets/starter-code/technology/image-launch-vehicle-landscape.jpg";
import lvd from "./assets/starter-code/technology/image-launch-vehicle-portrait.jpg";
import spm from "./assets/starter-code/technology/image-spaceport-landscape.jpg";
import spd from "./assets/starter-code/technology/image-spaceport-portrait.jpg";
import scm from "./assets/starter-code/technology/image-space-capsule-landscape.jpg";
import scd from "./assets/starter-code/technology/image-space-capsule-portrait.jpg";


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
                <Route exact path="/crew/commander" element={<Crew img={commander} data={jsonData.crew[0]}/>}/>
                <Route exact path="/crew/mission-specialist" element={<Crew img={missionspecialist} data={jsonData.crew[1]}/>}/>
                <Route exact path="/crew/pilot" element={<Crew img={pilot} data={jsonData.crew[2]}/>}/>
                <Route exact path="/crew/flight-engineer" element={<Crew img={flightengineer} data={jsonData.crew[3]}/>}/>

                {/* TECHNOLOGY */}
                <Route exact path="/technology/launch-vehicle" element={<Technology isd={lvd} ism={lvm} data={jsonData.technology[0]}/>}/>
                <Route exact path="/technology/spaceport" element={<Technology isd={spd} ism={spm} data={jsonData.technology[1]}/>}/>
                <Route exact path="/technology/space-capsule" element={<Technology isd={scd} ism={scm} data={jsonData.technology[2]}/>}/>
            </Routes>
        </HashRouter>
    )
}
