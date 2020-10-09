import style from "../styles/title.module.sass"
import React from "react";

const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h1 className={style.title_title}>{props.title}</h1>
            <span className={style.title_text}>{props.description}</span>
        </div>
    )
}

export default Title;

type TitlePropsType = {
    title: string
    description?: string
}