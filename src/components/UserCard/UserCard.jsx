import React from "react";
import style from "./card.module.scss";
import moment from "moment/moment";
import { UserTitle } from "../UserTitle/UserTitle";
import { UserStat } from "../UserStat/UserStat";
import { UserInfo } from "../UserInfo/UserInfo";


export const UserCard = (props) => {
    const {user} = props;
    const avatar = user?.avatar_url;
    const bio = user?.bio;

    const username = user?.name;
    const login = user?.login;
    const createdDate = user?.created_at;
    const date = createdDate && moment(createdDate).format('DD MMM YYYY');

    const repos = user?.public_repos;
    const following = user?.following;
    const followers = user?.followers;

    const location = user?.location || 'Not Available';
    const website = user?.blog;
    const twitter = user?.twitter_username || 'Not Available';
    const company = user?.company || 'Not Available';

    return (
        <div className={style.container}>

            <img className={style.avatar} src={avatar} alt="" />

            <UserTitle username={username} login={login} date={date} />
            <p className={`${style.bio}${bio ? '' : ` ${style.empty}`}`}>{bio || 'This profile has no bio'}</p>

            <UserStat repos={repos} following={following} followers={followers} />
            <UserInfo location={location} website={website} twitter={twitter} company={company} />

        </div>
    )
}