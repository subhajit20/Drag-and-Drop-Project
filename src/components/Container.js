import React from 'react'
import "../style/style.css"
import Shapecontainer from './Shapecontainer';
import Footer from './Footer'

function Container() {
    return ( <
        div className = 'container' >
        <
        div className = 'container_button' >
        <
        button className = 'buttons' > New Profile < /button> <
        button className = 'buttons' > Save Profile < /button> < /
        div > <
        Shapecontainer / > < Footer / > < /div >
    )
}

export default Container