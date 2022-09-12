import React from 'react';
import Select from 'react-select';
import style from './style.module.scss';

export const Dropdown = ({ name, options, placeholder, value, onChange }) => {

    const inputStyles = {
        fontWeight: '600',
        fontSize: 20,
    }
    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            borderRadius: 5,
            border: '1px solid #cbd6e2',
        }),
        input: (provided, state) => ({
            ...provided,
            ...inputStyles,
        }),
        singleValue: (provided, state) => ({
            ...provided,
            ...inputStyles
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            borderRadius: '3px',
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: '3px',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparent',
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            backgroundColor: "#479EFF"
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#479EFF",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            ...inputStyles,
        })
    }

    return (
        <div className={style.dropdown_wrapper}>
            <Select
                styles={customStyles}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                options={options}
            />
        </div>
    );
};