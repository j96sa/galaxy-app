import React from 'react'
import {HashRouter, Route, Routes} from "react-router-dom"
import Destination from './components/Destination'
import Home from './components/Home'
import jsonData from "./assets/data.json";

//PLANETS IMGAES
import moon from "./assets/starter-code/destination/image-moon.png"
import europa from "./assets/starter-code/destination/image-europa.png"
import mars from "./assets/starter-code/destination/image-mars.png"
import titan from "./assets/starter-code/destination/image-titan.png"


export default function router() {
    return (
        <HashRouter>            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/destination/moon" element={<Destination img={moon} data={jsonData.destinations[0]}/>} />
                <Route exact path="/destination/mars" element={<Destination img={mars} data={jsonData.destinations[1]}/>} />
                <Route exact path="/destination/europa" element={<Destination img={europa} data={jsonData.destinations[2]}/>} />
                <Route exact path="/destination/titan" element={<Destination img={titan} data={jsonData.destinations[3]}/>} />                
            </Routes>
        </HashRouter>
    )
}
