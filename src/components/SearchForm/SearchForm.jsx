import React, {useState} from "react";
import style from "./form.module.scss";
import { useForm } from "react-hook-form";
import api from "../../axios/api";
import { ReactComponent as SearchIcon} from '../../assets/icon-search.svg';

export const SearchForm = (props) => {
    const {setUser} = props;
    const {register, handleSubmit} = useForm();
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false);

    async function onSubmit(data) {
        await
        api.get(`/users/${data.username}`)
        .then((response) => {
            setUser(response.data);
            setHasError(false);
        })
        .catch((error) => {
            console.log(error);
            setHasError(true);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className={style.search}>

                <label className={style.label}>
                    <SearchIcon />
                </label>

                <input
                    {...register('username', {required: true})}
                    className={style.textField}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search GitHub username…"
                    autoComplete="off"
                />

                {hasError && (
                    <div className={style.error}>
                        No results
                    </div>
                )}

                <button type='submit' className={style.button}>Search</button>
            </div>
        </form>
    )
}