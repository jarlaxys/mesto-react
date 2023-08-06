import '../index.css';
import CloseIcon from '../images/CloseIcon.svg';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from "react";
import PopupWithForm from "./PopupWithForm";
import PopupEditProfile from "./PopupEditProfile";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupAddPlace from "./PopupAddPlace";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)

    function handleEditAvatarClick() {
        setEditProfilePopupOpen(true)
    }
    function handleEditProfileClick() {
        setAddPlacePopupOpen(true)
    }
    function handleAddPlaceClick() {
        setEditAvatarPopupOpen(true)
    }
    function closeAllPopups() {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditAvatarClick}
                onAddPlace={handleEditProfileClick}
                onEditAvatar={handleAddPlaceClick}
            />
            <Footer/>
            <PopupWithForm
                id = "edit-popup"
                title = 'Редактировать профиль'
                buttonText = 'Сохранить'
                children = {PopupEditProfile()}
                isOpen = {isEditProfilePopupOpen}
                onClose = {closeAllPopups}
            />
            <PopupWithForm
                id = "edit-avatar"
                title = 'Обновить аватар'
                buttonText = 'Сохранить'
                children = {PopupEditAvatar()}
                isOpen = {isEditAvatarPopupOpen}
                onClose = {closeAllPopups}
            />
            <PopupWithForm
                id = "add-popup"
                title = 'Новое место'
                buttonText = 'Создать'
                children = {PopupAddPlace()}
                isOpen = {isAddPlacePopupOpen}
                onClose = {closeAllPopups}
            />
            <div className="popup" id="delete-card">
                <div className="popup__container">
                    <button className="popup__close" type="button" id="delete-close"><img
                        src={CloseIcon}
                        className="popup__img-close" alt="Кнопка закрытия формы"/></button>
                    <form className="popup__content" name="add-cards" noValidate>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button className="popup__save" type="submit">Да</button>
                    </form>
                </div>
            </div>
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
            <template id="card">
                <li className="card">
                    <button className="button card__delete" type="button" aria-label="Удалить"></button>
                    <img className="card__img"/>
                    <div className="card__sign">
                        <h2 className="card__txt"></h2>
                        <div className="card__likebox">
                            <button className="button card__like" type="button" aria-label="Лайк"></button>
                            <p className="card__likes-counter"></p>
                        </div>
                    </div>
                </li>
            </template>
        </div>
    );
}

export default App;
