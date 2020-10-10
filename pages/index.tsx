import style from "../styles/home.module.sass"
import Head from "next/head";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import UserModule from "../components/UserModule";
import {Edit} from "@material-ui/icons";
import UserInfo from "../components/UserInfo";
import {InitialValueState, ValuesType} from "../state/state";
import {repository} from "../localStorage";

const Home = () => {

    const [values, setValues] = useState<ValuesType>(InitialValueState);

    useEffect(() => {
        const data = repository.getUserData()
        if (data) {
            return setValues(data);
        }
    }, [])

    return (
        <div className={style.app}>
            <Head>
                <title>Home</title>
                <meta name={"keywords"} content={"SEO words"}/>
            </Head>
            <Header name={values.name}/>
            <Title title={"Личный профиль"} description={"Главная/Личный профиль"}/>
            <UserModule name={values.name} href={"/edit"} text={"Редактировать"}>
                <Edit/>
            </UserModule>
            <UserInfo email={values.email} phone={values.phone}/>
        </div>
    )
}

export default Home;



