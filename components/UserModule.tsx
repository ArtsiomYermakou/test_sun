import AppBar from "@material-ui/core/AppBar";
import style from "../styles/userModule.module.sass"
import React from "react";
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

const UserModule = (props: PropsTypeUserModule) => {
    return (
        <AppBar className={style.module} position={"static"}>
            <Toolbar className={style.module_container}>
                <div>
                    <img className={style.container_avatar} src={"./avatar.svg"} alt={"avatar"}/>
                    <Typography className={style.container_text} variant={"h6"}>
                        {props.name}
                    </Typography>
                </div>
                <div>
                    <IconButton className={style.container_button} color={"primary"}
                                aria-label={"upload picture"} component={"span"}>
                        <Link href={props.href}>
                            <a><span className={style.button_text}>{props.text}</span>{props.children}</a>
                        </Link>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default UserModule;

type PropsTypeUserModule = {
    name: string
    href: string
    text: string
    children: any
}