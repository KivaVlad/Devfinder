import React from "react";
import style from "./style.module.scss";
import mock from "../../mock/mock.json";
import moment from "moment/moment";
import { UserTitle } from "../UserTitle/UserTitle";
import { UserStat } from "../UserStat/UserStat";
import { UserInfo } from "../UserInfo/UserInfo";


export const DefaultUser = () => {

    const avatar = mock.avatar_url;
    const bio = mock.bio;

    const username = mock.name;
    const login = mock.login;
    const createdDate = mock.created_at;
    const date = createdDate && moment(createdDate).format('DD MMM YYYY');

    const repos = mock.repos;
    const following = mock.following;
    const followers = mock.followers;

    const location = mock.location || 'Not Available';
    const website = mock.blog;
    const twitter = mock.twitter;
    const company = mock.company || 'Not Available';

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