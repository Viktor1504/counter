import React from 'react';

type ButtonPropsType = {
    title: string
    btnClick: () => void
    disabled: boolean
}
const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button
                className={'button'}
                disabled={props.disabled}
                onClick={props.btnClick}>
                {props.title}
            </button>
        </div>
    );
};

export default Button;