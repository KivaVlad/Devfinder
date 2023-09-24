import React, { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { UserCard } from "../UserCard/UserCard";
import { DefaultUser } from "../DefaultUser/DefaultUser";


export const Main = () => {
    const [user, setUser] = useState();

    return (
        <>
            <SearchForm setUser={setUser} />

            {user ? 
                <UserCard user={user} />
            :
                <DefaultUser />
            }
        </>
    )
}