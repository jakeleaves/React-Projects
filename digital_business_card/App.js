import React from "react"

import Info from "./containers/info"
import About from "./containers/about"
import Interests from "./containers/interests"
import Footer from "./containers/footer"

export default function App() {
    return(
        <div className="container">
            <img src="./images/IMG_2374.jpeg" height="317px" width="317px"/>
            <Info/>
            <About/>
            <Interests/>    
            <Footer/>
        </div>       
    )
}