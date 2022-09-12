import React, { useEffect } from 'react';
import SR from 'scrollreveal';
import style from './style.module.scss';

export const Banner = () => {

    useEffect(() => {
        SR().reveal('#banner_copy', { opacity: 0.2, viewFactor: 0.3, scale: 0.8, delay: 0, reset: false, distance: '10px', origin: 'left' });
    }, [])

    return (
        <div className={style.banner_wrapper}>
            <div
                id="banner_copy"
                className={style.copy_section}
            >
                <h1>It's Election Season let's do our part.</h1>
                <div className={style.accent} />
                <span className={style.grabber}>
                    Every vote counts, learn more about your state officials by selecting a state to search for your representatives.
                </span>
            </div>
        </div >
    );
};
