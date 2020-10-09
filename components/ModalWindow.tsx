import {ValuesType} from "../state/state";
import style from "../styles/modalWindow.module.sass"
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import {repository} from "../localStorage";


const useStyles = makeStyles({
    save: {
        backgroundColor: '#01BDA7',
        marginBottom: '28px',
        padding: '16px 63px',
        borderRadius: '36px',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '19px',
        textTransform: 'none',
        '&:hover, &:focus': {
            backgroundColor: '#01BDA7',
        },
        '@media screen and (max-width: 768px)': {
            marginBottom: '17px',
        }
    },
    label: {},
    unSave: {
        padding: '16px 53px',
        borderRadius: '36px',
        color: '#01BDA7',
        borderColor: '#01BDA7',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '19px',
        textTransform: 'none'
    },
    good: {
        backgroundColor: '#01BDA7',
        marginBottom: '28px',
        padding: '16px 63px',
        borderRadius: '36px',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '19px',
        textTransform: 'none',
        '&:hover, &:focus': {
            backgroundColor: '#01BDA7',
        },
        '@media screen and (max-width: 768px)': {
            marginBottom: '17px',
            display: 'none'
        }
    },
});


const ModalWindow = (props: ModalPropsType) => {

    const classes = useStyles()
    const [save, setSave] = useState<boolean>(false);
    const [text, setText] = useState('')

    const SaveData = () => {
        repository.setUserData(props.values)
        setText('Данные успешно сохранены')
        setSave(true)
    }

    const onTouch = () => {
        let width = window.screen.width
        if (width < 768) {
            setSave(false)
            props.setModalIsOpen(false)
        }
    }

    const unSave = () => props.setModalIsOpen(false)

    const closeModal = () => {
        props.setModalIsOpen(false)
    }

    return (
        <div className={`${style.modal} ${save ? style.success : ""}`}>
            {
                !save ? (
                    <>
                        <span className={style.modal_text}>Сохранить изменения?</span>
                        <Button classes={{
                            label: classes.label,
                            root: classes.save
                        }} onClick={SaveData} variant={"contained"} color={'primary'} disableRipple={true}>
                            Сохранить
                        </Button>
                        <Button onClick={closeModal} classes={{
                            label: classes.label,
                            root: classes.unSave
                        }} variant={"outlined"} color={"primary"} disableRipple={true}>
                            Не сохранять
                        </Button>
                        <img className={style.modal_close} onClick={unSave} src={"./close-modal.svg"} alt={"close"}/>
                    </>
                ) : (
                    <>
                        <div className={style.closeDiv} onClick={onTouch}/>
                        <span className={`${style.modal_text} ${style.second}`} onClick={onTouch}>{text}</span>
                        <Button classes={{
                            label: classes.label,
                            root: classes.good
                        }} onClick={unSave} variant={"contained"} color={"primary"} disableRipple={true}>
                            Хорошо
                        </Button>
                    </>
                )
            }
        </div>
    )
}

export default ModalWindow;

type ModalPropsType = {
    setModalIsOpen: (state: boolean) => void
    values: ValuesType
}
