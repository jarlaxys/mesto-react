import React from "react";

function  Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <button
                className="button card__delete"
                type="button"
                aria-label="Удалить"
            ></button>
            <img className="card__img" src={props.image} onClick={handleClick}/>
            <div className="card__sign">
                <h2 className="card__txt">{props.title}</h2>
                <div className="card__likebox">
                    <button
                        className="button card__like"
                        type="button"
                        aria-label="Лайк"
                    ></button>
                    <p className="card__likes-counter">{props.likes}</p>
                </div>
            </div>
        </li>
    )
}
export default Card;