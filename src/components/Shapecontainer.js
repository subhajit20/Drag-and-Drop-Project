import React, { useState } from 'react'
import Images from './Images';
import { useDrop } from 'react-dnd';


const imageList2 = [{
        id: 1,
        img1: "./images/circle.png"
    },
    {
        id: 2,
        img1: "./images/double_circle.png"
    }, {
        id: 3,
        img1: "./images/pngegg.png"
    },
    {
        id: 4,
        img1: "./images/rectangle.png"
    },
    {
        id: 5,
        img1: "./images/triangle-png-16923.png"
    }, {
        id: 7,
        img1: "./images/left_arror.png"
    },
    {
        id: 8,
        img1: "./images/rigth_arrow.png"
    }, {
        id: 9,
        img1: "./images/enter.png"
    }
]

function Shapecontainer() {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoboard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addImagetoboard = (id) => {
        const pictureList = imageList2.filter((x) => id === x.id)
        setBoard((board) => [...board, pictureList[0]]);
    }
    return (

        <
        div >
        <
        div className = 'Headings' >
        <
        span > Component Catalouge < /span>  <
        span > Workflow Canvas < /span> < /
        div > <
        div id = 'shape_container' >
        <
        div id = "myimageList" > {
            imageList2.map((x) => {
                return <Images id = { x.id }
                key = { x.id }
                imgs = { x.img1 }
                />
            })
        } <
        /div> <
        div id = "dragablearea"
        ref = { drop } >
        <
        div >
        <
        button id = "new" > New < /button> <
        button id = "save" > Save < /button>  < /
        div > {
            board.map((x) => {
                return <Images imgs = { x.img1 }
                id = { x.id }
                />
            })
        } <
        /div>

        <
        /
        div > < /
        div >
    )
}

export default Shapecontainer;