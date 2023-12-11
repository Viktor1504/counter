import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    stateValue: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

const Input: React.FC<InputPropsType> = (props) => {

    return <div>
        <label htmlFor={'value'}>{props.title}</label>
        <input className={props.className}
               name="value"
               type="number"
               value={props.stateValue}
               onChange={props.onChange}/>
    </div>
}

export default Input;