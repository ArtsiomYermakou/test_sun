import style from "../styles/home.module.sass"
import Head from "next/head";
import React, {useState} from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import UserModule from "../components/UserModule";
import {Edit} from "@material-ui/icons";
import UserInfo from "../components/UserInfo";


const Home = () => {

    const InitialValueState = {
        name: "Иванова Анна Михайловна",
        email: "ivanova@mail.ru",
        phone: "Укажите номер телефона"
    }

    const [values, setValues] = useState<ValuesType>(InitialValueState)

    return (
        <div className={style.app}>
            <Head>
                <title>Home</title>
            </Head>
            <Header name={values.name}/>
            <Title title={"Личный профиль"} description={"Главная/Личный профиль"}/>
            <UserModule name={values.name} href={"/edit"} text={"Редактировать"}>
                <Edit/>
            </UserModule>
            <UserInfo email={values.email} phone={values.phone} />
        </div>
    )
}

export default Home;

type ValuesType = {
    name: string
    email: string
    phone: string
}

