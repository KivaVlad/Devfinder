import React from "react";
import style from "./style.module.scss";

export const UserTitle = (props) => {
    const {username, login, date} = props;

    return (
        <div className={style.userTitle}>
            <h2>{username}</h2>
            <h3>{login}</h3>
            <span>{date}</span>
        </div>
    )
}