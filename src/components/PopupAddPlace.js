import PopupWithForm from "./PopupWithForm";

function PopupAddPlace(props) {
  return (
    <>
      <PopupWithForm
        id="add-popup"
        title="Новое место"
        buttonText="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input
          type="text"
          className="popup__input popup__input_info_title"
          name="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="title-error" className="error"></span>
        <input
          type="url"
          className="popup__input popup__input_info_link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-error" className="error"></span>
      </PopupWithForm>
    </>
  );
}

export default PopupAddPlace;
