import React, { useState, useEffect } from 'react'

const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        if(currentCount > 10) {
            setCurrentCount(0)
        }
    }, [currentCount])

    const buttonStyle = {
        background: props.buttonColor,
        borderRadius: '10%',
        padding: '10px',
        margin: '5px',
    }

    return (
        <div>
            <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div className={'count-display'}>{currentCount}</div>
        </div>
    )
}

export default CountButton
