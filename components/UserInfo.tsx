import style from "../styles/userInfo.module.sass"
import React from "react";
import Item from "./Item";

const UserInfo = (props: UserInfoPropsType) => {
    return (
        <div className={style.userInformation}>
            <Item link={"./mail.svg"} text={props.email}/>
            <Item link={"./phone.svg"} text={props.phone}/>
        </div>
    )
}

export default UserInfo;

type UserInfoPropsType = {
    email: string
    phone: string
}