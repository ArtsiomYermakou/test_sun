import {useFormik} from "formik";
import {ValuesType} from "../state/state";
import React from "react";
import style from "../styles/userInfo.module.sass"
import axios from "axios"
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import Input from "./Input";
import {ValidateEmail, ValidateName, ValidatePhone} from "./validate";

const instance = axios.create({
    baseURL: `/api/posts`,
})

const useStyles = makeStyles({
    root: {
        backgroundColor: '#01BDA7',
        padding: '15px 26px',
        marginBottom: '44px',
        borderRadius: '36px',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '19px',
        textTransform: 'none',
        '&:hover, &:focus': {
            backgroundColor: '#01BDA7',
        },
        '@media screen and (max-width: 768px)': {
            marginBottom: '17px'
        }
    }
});


const UserEditInfo = (props: UserEditInfoPropsType) => {

    const classes = useStyles();

    const initialValues: ValuesType = {
        name: "",
        email: "",
        phone: "",
    }

    const onSubmit = (values: ValuesType, a: any) => {
        instance.post("", values)
            .then(res => {
                props.setValues({
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                })
                a.resetForm()
                props.setModalIsOpen(true)
                return console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const validate = (values: ValuesType): { name?: string, email?: string, phone?: string } => {
        const errors = {}

        if (values.name === "") return {name: "Введите фамилию и имя"}
        if (!ValidateName(values.name)) return {name: "Вы неверно указали фамилию и имя"}
        if (values.email === '') return {email: 'Введите ваш email'}
        if (!ValidateEmail(values.email)) return {email: 'Вы неверно указали email'}
        if (values.phone === '') return {phone: 'Введите номер телефона'}
        if (!ValidatePhone(values.phone)) return {phone: 'Вы неверно указали номер телефона'}
        if (values.phone.length > 13) return {phone: "Номер не может быть длиннее 13 символов"} //Пример
        if (values.phone.length < 7) return {phone: "Номер не может быть короче 7 символов"} //Пример
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    const renderInput = (props: RenderInputPropsType) => {
        const error = formik.errors[props.name] ? formik.errors[props.name] : ""
        return <Input img={props.img} className={style.container_icon} classNameInput={style.container_input}
                      error={error ? error : ""}
                      label={props.label}
                      placeholder={props.placeholder}
                      message={error ? error : ""}
                      value={initialValues}
                      formik={formik.getFieldProps(`${props.name}`)}/>
    }

    return (
        <div className={style.userInformation}>
            <div className={style.inputs}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.container}>
                        {renderInput({
                            img: "./contacts.svg",
                            name: "name",
                            label: "Фамилия и имя",
                            placeholder: "Укажите ваши фамилию и имя"
                        })}
                        {renderInput({
                            img: "./mail.svg",
                            name: "email",
                            label: "E-mail",
                            placeholder: "Укажите ваш email"
                        })}
                        {renderInput({
                            img: "./phone.svg",
                            name: "phone",
                            label: "Номер телефона",
                            placeholder: "Укажите номер телефона"
                        })}
                    </div>
                    <Button
                        disabled={!!(formik.errors.phone || formik.errors.email || formik.errors.name)}
                        type={"submit"} classes={{root: classes.root}} variant={"contained"} color={"primary"}
                        disableRipple={true}>
                        Сохранить изменения
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default UserEditInfo;

type RenderInputPropsType = {
    img: string
    name: "phone" | "name" | "email"
    label: string
    placeholder: string
}

type UserEditInfoPropsType = {
    setValues: (values: ValuesType) => void
    setModalIsOpen: (state: boolean) => void
}