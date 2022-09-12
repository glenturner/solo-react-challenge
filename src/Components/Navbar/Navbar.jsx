import React, { useCallback } from "react";
import { Logo } from '../../Assets';
import style from "./style.module.scss";

export const Navbar = () => {

    const AppLogo = useCallback(() => (
        <div className={style.logo}>
            <img
                onClick={() => window.open('https://gosolo.io/', '_blank')}
                draggable="false"
                style={{ height: 50, width: 'auto' }}
                alt="Logo"
                src={Logo}
            />
        </div>
    ), []);

    return (
        <div className={style.nav_wrapper}>
            <AppLogo />
        </div>
    );
};
