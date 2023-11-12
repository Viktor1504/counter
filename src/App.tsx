import React, {useState} from 'react';
import './App.css';
import {Counter} from './componets/Counter';
import {SettingsCounter} from './componets/SettingsCounter';

function App() {

    const [count, setCount] = useState<number>(0)

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    return (
        <div className="App">
            <SettingsCounter
                count={count}
                setCount={setCount}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
            />
            <Counter
                count={count}
                setCount={setCount}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
            />
        </div>
    );
}

export default App;
