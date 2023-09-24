import React from "react";
import style from "./header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";


export const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <h2>devfinder</h2>
            </div>

            <ThemeSwitcher />
        </header>
    )
}