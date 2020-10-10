import React from "react";
import Link from "next/link";
import style from "../styles/errorBlock.module.sass"
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';

const ErrorPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.errorBlock}>
                <h1 className={style.error}>Error 404</h1>
                <span className={style.please}>Please<Link href={"/"}><a
                    className={style.link}>go back</a></Link></span>
                <SubdirectoryArrowLeftIcon fontSize={"large"}/>
            </div>
        </div>
    )
}

export default ErrorPage;