import React, { useState, useEffect } from 'react';
import './Timer.css';
import  TimerButtons  from '../TimerButtons/TimerButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStopCircle, faRedo } from '@fortawesome/free-solid-svg-icons';

export const Timer = () => {
    let [hours, setHours] = useState(0)
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    const [isOn, setIsON] = useState(false);
    let Hours: Array<number> = [];
    let Minutes: number[] = [];
    let Seconds: number[] = [];

    useEffect(() => {
        if (isOn) {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(--seconds);
                }
                else if (hours > 0 && minutes === 0 && seconds === 0) {
                    setHours(--hours)
                    setMinutes(59)
                    setSeconds(59)
                }
                else if ((hours > 0 && minutes > 0 && seconds === 0) || (hours === 0 && minutes > 0 && seconds === 0)) {
                    setMinutes(--minutes)
                    setSeconds(59)
                }
                else if (seconds === 0 && minutes === 0 && hours === 0) {
                    clearInterval(interval);
                    setIsON(false);
                    //console.log("abc");
                }
            }, 1000);

            return () => {                            //componentWillUnmount
                                                   //For cleanup
                clearInterval(interval);
            };
        }

    }, [isOn, hours, minutes, seconds]);

    const startTimer = () => {
        setIsON(true);
    }
    const stopTimer = () => {
        setIsON(false);
    }
    const resetTimer = () => {
        stopTimer();
        setHours(0)
        setMinutes(0);
        setSeconds(0);
    }
    const loop = (range: number, nameOfArr: number[]) => {
        for (let i = 1; i <= range; i++) {
            nameOfArr.push(i)
        }
    }
    loop(24, Hours)
    loop(59, Minutes)
    loop(59, Seconds)

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        if (e.target.name === "Hours") {
            setHours(parseInt(e.target.value))
            e.target.value = '0';
        }
        else if (e.target.name === "Minutes") {
            setMinutes(parseInt(e.target.value))
            e.target.value = '0';
        }
        else {
            setSeconds(parseInt(e.target.value))
            e.target.value = '0';
        }
    }


    return (
        <div className="timer-container">
            <div className="heading">
                <h1>Timer App12345</h1>
            </div>
            <div className="time-display">
                {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div className="drop_down_list_conatiner">
                <select onChange={handleSelect} name="Hours" disabled={isOn ? true : false}>
                    <option value={0}>Hours</option>
                    {Hours.map((val, ind) => (<option key={ind} value={val}>{val}</option>))}
                </select>
                <select onChange={handleSelect} name="Minutes" disabled={isOn || hours === 24 ? true : false}>
                    <option value={0}>Minutes</option>
                    {Minutes.map((val, ind) => (<option key={ind} value={val}>{val}</option>))}
                </select>
                <select onChange={handleSelect} name="Seconds" disabled={isOn || hours === 24 ? true : false}>
                    <option value={0}>Seconds</option>
                    {Seconds.map((val, ind) => (<option key={ind} value={val}>{val}</option>))}
                </select>

            </div>
            <div className="timer-buttons-container">
                <TimerButtons buttonAction={startTimer} buttonValue={ <FontAwesomeIcon icon={faPlayCircle} />} title="Start" />
                <TimerButtons buttonAction={stopTimer} buttonValue={<FontAwesomeIcon icon={faStopCircle} />} title="Stop" />
                <TimerButtons buttonAction={resetTimer} buttonValue={<FontAwesomeIcon icon={faRedo} />} title="Reset" />
            </div>
        </div>

    )
}
