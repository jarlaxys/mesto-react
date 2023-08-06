function PopupEditAvatar() {
    return (
        <>
            <input type="url" className="popup__input popup__input_info_link" name="avatar"
                   placeholder="Ссылка на картинку" required/>
            <span id="avatar-error" className="error"></span>
        </>
    )
}

export default PopupEditAvatar;