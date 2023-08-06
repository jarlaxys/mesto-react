import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props) {
  return (
    <>
      <PopupWithForm
        id="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input
          type="url"
          className="popup__input popup__input_info_link"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="avatar-error" className="error"></span>
      </PopupWithForm>
    </>
  );
}

export default PopupEditAvatar;
