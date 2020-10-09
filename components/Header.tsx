import React from "react";
import style from "../styles/header.module.sass"

const Header = (props: HeaderPropsType) => {
    const num = props.name.indexOf(" ", 0)
    props.name[num + 1].toUpperCase();
    const headerName = props.name.slice(0, num + 2);
    return (
        <div className={style.header}>
            <img className={style.header_notifications} src={"./notifications.svg"} alt={"notifications"}/>
            <img className={style.header_line} src={"./line.svg"} alt={"line"}/>
            <img className={style.header_avatar} src={"./avatar.svg"} alt={"avatar"}/>
            <span className={style.header_text}>{headerName + "."}</span>
        </div>
    )
}

export default Header;

type HeaderPropsType = {
    name: string
}

