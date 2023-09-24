import React from "react";
import style from "./style.module.scss";
import LocationIcon from '../../assets/icon-location.svg';
import LinkIcon from '../../assets/icon-website.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import CompanyIcon from '../../assets/icon-company.svg';


export const UserInfo = (props) => {
    const {location, website, twitter, company} = props;

    return (
        <div className={style.container}>

            <div className={style.items_container}>
                <img src={LocationIcon} alt="" />
                <span>{location}</span>
            </div>

            <div className={style.items_container}>
                <img src={LinkIcon} alt="" />
                {website ?
                    <a className={style.link} target='_blank' rel="noreferrer" href={website}>{website}</a>
                :
                    <span>Not Available</span>
                }
            </div>

            <div className={style.items_container}>
                <img src={TwitterIcon} alt="" />
                <span>{twitter}</span>
            </div>

            <div className={style.items_container}>
                <img src={CompanyIcon} alt="" />
                <span>{company}</span>
            </div>

        </div>
    )
}