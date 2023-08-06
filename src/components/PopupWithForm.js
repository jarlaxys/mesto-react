import React from "react";
import CloseIcon from "../images/CloseIcon.svg";

function PopupWithForm(props) {
    return (
        <div className={`popup ${ props.isOpen ? 'popup_opened' : ''} `} id={props.id}>
            <div className="popup__container">
                <button className="popup__close" type="button" id="edit-close" onClick={props.onClose}><img
                    src={CloseIcon}
                    className="popup__img-close" alt="Кнопка закрытия формы"/></button>
                <form className="popup__content" name="edit-profile">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__save" type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;