import React from "react";
import CloseIcon from "../images/CloseIcon.svg";

function ImagePopup(props) {
    return (
        <div className="popup popup_img" id="img-popup">
            <div className="popup__box">
                <button className="popup__close" type="button" id="img-close"><img
                    src={CloseIcon}
                    className="popup__img-close" alt="Кнопка закрытия формы"/></button>
                <form className="popup__content" name="add-cards" noValidate>
                    <img className="popup__img" src="#" alt="#"/>
                    <p className="popup__subtitle"></p>
                </form>
            </div>
        </div>
    )
}