import React, {useEffect, useState} from "react";
import style from "./switcher.module.scss";

import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';


export const ThemeSwitcher = () => {
    const [isDark, setDark] = useState(false);
    const themeText = isDark ? 'Light' : 'Dark';
    const ThemeIcon = isDark ? SunIcon : MoonIcon;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark]);

    return (
        <div className={style.switcher} onClick={() => setDark(!isDark)}>
            <span>
                {themeText}
            </span>
            <ThemeIcon className={style.icon} />
        </div>
    )
}