import React from 'react'

export default (props) => {
    return (
        <button id={props.numString} onClick={props.clicked}>{props.number}</button>
    )
}
