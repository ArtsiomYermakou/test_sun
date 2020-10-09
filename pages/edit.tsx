import style from "../styles/home.module.sass"
import React, {useEffect, useState} from "react";
import Head from "next/head";
import Header from "../components/Header";
import {InitialValueState, ValuesType} from "../state/state";
import Title from "../components/Title";
import UserModule from "../components/UserModule";
import {Close} from "@material-ui/icons";
import UserEditInfo from "../components/UserEditInfo";
import ModalWindow from "../components/ModalWindow";
import {repository} from "../localStorage";


const Home = () => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [values, setValues] = useState<ValuesType>(InitialValueState);

    useEffect(() => {
        const data = repository.getUserData()
        if (data) {
            return setValues(data)
        }
    }, [])

    return (
        <div className={style.app}>
            <Head>
                <title>Edit</title>
            </Head>
            <Header name={values.name}/>
            <Title title={"Личный профиль"} description={"Главная/Личный профиль"}/>
            <UserModule name={values.name} href={"/"} text={"Закрыть"}>
                <Close/>
            </UserModule>
            <UserEditInfo setModalIsOpen={setModalIsOpen} setValues={setValues} />
            {
                modalIsOpen
                    ? <>
                        <ModalWindow values={values} setModalIsOpen={setModalIsOpen}/>
                        <div className={style.fon}/>
                    </> : <></>
            }
        </div>
    )
}

export default Home;