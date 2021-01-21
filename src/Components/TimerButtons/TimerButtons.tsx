import React from 'react';
import './TimerButtons.css';


type propTypes = {
    buttonAction: () => void
    buttonValue: JSX.Element
    title: string
}

 const TimerButtons: React.FC<propTypes> = ({ buttonAction, buttonValue, title }) => {
    return (
        <button title={title} className="buttons" onClick={() => buttonAction()}>{buttonValue}</button>
    )
}

export default TimerButtons
