import EditButton from "../images/EditButton.svg";
import AddButton from "../images/AddButton.svg";
import React from "react";

function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-box">
                    <img src="#" alt="фото профиля" className="profile__avatar"/>
                    <button aria-label="Редактирования аватар" type="button"
                            className="button profile__edit-avatar" onClick={props.onEditAvatar}>
                        <img
                            src={EditButton} className="profile__img-edit-avatar"
                            alt="Кнопка редактировать профиль"/>
                    </button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title"></h1>
                    <button className="button profile__edit-profile" type="button"
                            aria-label="Редактировать профиль" onClick={props.onEditProfile}><img
                        src={EditButton} className="profile__img-edit"
                        alt="Кнопка редактировать профиль"/></button>
                    <p className="profile__subtitle"></p>
                </div>
                <button className="button profile__add-card" type="button" aria-label="Добавить" onClick={props.onAddPlace}><img
                    src={AddButton}
                    className="profile__img-add" alt="Кнопка добавить карточку"/></button>
            </section>
            <section className="gallery" aria-label="Галерея">
                <ul className="gallery__cards"></ul>
            </section>
        </main>
    )
}

export default Main;