import React from 'react';
import style from './style.module.scss';

export const InfoList = ({ data }) => {

    const RepDetails = ({ firstName, lastName, district, phone, office }) => (
        <div className={style.info_cell}>
            <span className={style.info_cell_value}>{firstName}</span>
            <span className={style.info_cell_value}>{lastName}</span>
            <span className={style.info_cell_value}>District: {district}</span>
            <span className={style.info_cell_value}>{phone}</span>
            <span className={style.info_cell_value}>{office}</span>
        </div>
    );

    if (!data.name) return null;
    return (
        <div className={style.info_list_wrapper}>
            <h2>Info</h2>
            <RepDetails
                firstName={data.name && data.name.split(' ')[0]}
                lastName={data.name && data.name.split(' ')[1]}
                district={data?.district || 'N/A'}
                phone={data.phone || 'N/A'}
                office={data.office || 'N/A'}
            />
        </div>
    );
};
