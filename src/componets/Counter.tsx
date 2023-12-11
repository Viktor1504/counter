import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import '../App.css';
import Input from './Input';

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [showSettings, setShowSettings] = useState(false)

    const onClickAddCounter = () => {
        setCount(count < maxValue ? count + 1 : count);
    }
    const onClickResetCounter = () => {
        setCount(startValue < 0 ? 0 : startValue);
    }
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onClickSettingsHandler = () => {
        setShowSettings(!showSettings)
        setCount(startValue < 0 ? 0 : startValue)
    }

    const disableState = startValue === maxValue || maxValue < 0 || startValue < 0 || startValue > maxValue


    return <div className={'main'}>
        <div className={'mainDisplay'}>
            {showSettings ? <>
                    <Input className={maxValue < 0 || startValue === maxValue ? 'inputMistake' : ''}
                           title={'max value:'}
                           stateValue={maxValue}
                           onChange={onChangeMaxInputHandler}/>

                    <Input
                        className={startValue < 0 || startValue > maxValue || startValue === maxValue ? 'inputMistake' : ''}
                        title={'start value:'}
                        stateValue={startValue}
                        onChange={onChangeStartInputHandler}/>
                </> :
                <span className={count === maxValue ? 'redSpan' : ''}>{count}</span>
            }
        </div>
        <div className={'buttons'}>
            {showSettings ?
                <Button title={'set'} btnClick={onClickSettingsHandler} disabled={disableState}/>
                :
                <>
                    <Button title={'inc'} btnClick={onClickAddCounter} disabled={count === maxValue}/>
                    <Button title={'reset'} btnClick={onClickResetCounter} disabled={false}/>
                    <Button title={'set'} btnClick={onClickSettingsHandler} disabled={false}/>
                </>
            }
        </div>
    </div>
}