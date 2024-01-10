import React from "react"
import Interests from "./components/Interests"
import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function App(){
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}