import React from "react";
import style from "./style.module.scss";


export const UserStat = (props) => {
    const {repos, following, followers} = props;

    return (
        <div className={style.userStat}>
            <div className={style.info}>
                <div className={style.infoTitle}>Repos</div>
                <div className={style.infoNumber}>{repos}</div>
            </div>

            <div className={style.info}>
                <div className={style.infoTitle}>Following</div>
                <div className={style.infoNumber}>{following}</div>
            </div>

            <div className={style.info}>
                <div className={style.infoTitle}>Followers</div>
                <div className={style.infoNumber}>{followers}</div>
            </div>
        </div>
    )
}