import EditButton from "../images/EditButton.svg";
import AddButton from "../images/AddButton.svg";
import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("Имя");
  const [userDescription, setUserDescription] = useState("Информация");
  const [userAvatar, setUserAvatar] = useState(
    "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-b1a78a08-1bd8-44b5-9025-a0c7f5f130fa",
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userRes, cardsRes]) => {
        setUserName(userRes.name);
        setUserDescription(userRes.about);
        setUserAvatar(userRes.avatar);
        setCards(cardsRes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img
            src={userAvatar}
            alt="фото профиля"
            className="profile__avatar"
          />
          <button
            aria-label="Редактирования аватар"
            type="button"
            className="button profile__edit-avatar"
            onClick={props.onEditAvatar}
          >
            <img
              src={EditButton}
              className="profile__img-edit-avatar"
              alt="Кнопка редактировать профиль"
            />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="button profile__edit-profile"
            type="button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          >
            <img
              src={EditButton}
              className="profile__img-edit"
              alt="Кнопка редактировать профиль"
            />
          </button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="button profile__add-card"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        >
          <img
            src={AddButton}
            className="profile__img-add"
            alt="Кнопка добавить карточку"
          />
        </button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__cards">
          {cards.map((item) => (
            <Card
              card={item}
              onCardClick={props.onCardClick}
              image={item.link}
              title={item.name}
              likes={item.likes.length}
              key={item._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
