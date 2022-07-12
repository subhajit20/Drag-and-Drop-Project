import React from 'react'
import { useDrag } from 'react-dnd'



function Images({ id, imgs }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return ( < img ref = { drag }
        src = { `${imgs}` }
        id = "image" / >
    )
}

export default Images