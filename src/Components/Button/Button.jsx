import React from 'react';
import style from './style.module.scss';

export const Button = ({ label, onClick }) => {

    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) onClick(e);
    }

    return (
        <div className={style.button} onClick={handleClick}>
            <label>{label}</label>
        </div>
    );
};
