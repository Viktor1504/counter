import React from 'react';
import Button from './Button';
import '../App.css';
import {CounterPropsType} from './SettingsCounter';

export const Counter = ({count = 0, setCount, startValue = 0, setStartValue, maxValue = 0 , setMaxValue}: CounterPropsType) => {

    const addCounter = () => {
        if (setCount && count < maxValue) {
            setCount(count + 1)
        }
    }

    const resetCounter = () => {
        if (setCount) {
            setCount(startValue)
        }
    }

    return (
        <div className={'main'}>
            <div className={'mainDisplay'}>
                <span>{count}</span>
            </div>
            <div className={'buttons'}>
                <Button title={'Inc'} btnClick={addCounter} disabled={false}/>
                <Button title={'Reset'} btnClick={resetCounter} disabled={false}/>
            </div>
        </div>
    );
};
