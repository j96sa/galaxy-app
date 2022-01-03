import React from 'react'
import {HashRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'

export default function router() {
    return (
        <HashRouter>            
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
    )
}
