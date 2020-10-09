import style from "../styles/userInfo.module.sass";
import {TextField} from "@material-ui/core";
import {ValuesType} from "../state/state";
import React from "react";

const Input = (props: InputPropsType) => {

    return (
        <div className={style.input}>
            <img className={props.className} src={props.img} alt={"logo"}/>
            <TextField placeholder={props.placeholder}
                       helperText={props.error}
                       message={props.message}
                       label={props.label}
                       className={props.classNameInput}
                       defaultValue={props.value}
                       error={props.error}
                       {...props.formik} />

            <img className={style.line} src={"./Line-12.svg"} alt="line"/>
        </div>
    )
}

export default Input;

type InputPropsType = {
    img: string
    error: string
    className: string
    classNameInput: string
    label: string
    message: string
    placeholder: string
    formik: any
    value: ValuesType
}