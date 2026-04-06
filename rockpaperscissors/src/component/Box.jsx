import React from 'react'

function Box(props) {
    return (
        <div className={`box ${props.result}`}>
            <h2>{props.title}</h2>
            <img src={props.item && props.item.img} className="item-img" />
            <h2>{props.result}</h2>
        </div>
    )
}

export default Box