import React, {ChangeEvent} from 'react';
import Button from './Button';
import '../App.css';

export type CounterPropsType = {
    count?: number
    setCount?: (value: number) => void
    startValue?: number
    setStartValue?: (value: number) => void
    maxValue?: number
    setMaxValue?: (value: number) => void
}

export const SettingsCounter = ({setCount, startValue = 0, setStartValue, maxValue = 0, setMaxValue}: CounterPropsType) => {
    const changeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (setMaxValue) {
            setMaxValue(Number(e.currentTarget.value))
        }
    }

    const changeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (setStartValue) {
            setStartValue(Number(e.currentTarget.value));
        }
    }

    const btnSetHandler = () => {
        if (setCount) {
            setCount(startValue)
        }
    }

    return (
        <div className={'main'}>
            <div className={'settings'}>
                <div>
                    <div>
                        <label>
                            max value:
                            <input
                                value={maxValue}
                                type={'number'}
                                onChange={changeInputMaxHandler}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            start value:
                            <input
                                value={startValue}
                                type={'number'}
                                onChange={changeInputStartHandler}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className={'buttons'}>
                <Button title={'Set'} btnClick={btnSetHandler} disabled={false}/>
            </div>
        </div>
    );
};

