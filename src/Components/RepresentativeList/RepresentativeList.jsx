import React, { memo } from 'react';
import style from './style.module.scss';

export const RepresentativeList = memo(({ results, onClick }) => {

    const RowItem = ({ name, party }) => (
        <div onClick={onClick} className={style.rep_list_row}>
            <div className={style.rep_name}>{name}</div>
            <div className={style.rep_party}>{party}</div>
        </div>
    );

    const ListLabel = ({ label }) => (
        <>
            <span className={style.cell_label}>{label}</span>
        </>
    );

    return (
        <div className={style.rep_list_container}>
            <h2 className={style.list_header}>
                List / <span>Representatives</span>
            </h2>
            <div className={style.rep_cell_label}>
                <ListLabel label='Name' />
                <ListLabel label='Party' />
            </div>
            {results && results.length ?
                results?.map(result => <RowItem name={result.name} party={result.party.charAt(0)} />)
                : <div className={style.no_results}>No results found</div>
            }
        </div>
    );
});
