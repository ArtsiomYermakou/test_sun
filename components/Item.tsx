import style from "../styles/userInfo.module.sass";
import React from "react";

const Item = (props: ItemPropsType) => {
    return (
        <div className={style.item}>
            <img className={style.item_image} src={props.link} alt="*image"/>
            <span className={style.item_text}>{props.text}</span>
        </div>
    )
}

export default Item;

type ItemPropsType = {
    link: string
    text: string
}
