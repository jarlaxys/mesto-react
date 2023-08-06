function PopupEditProfile() {
    return (
        <>
            <input type="text" className="popup__input popup__input_info_name" name="name" required
                   minLength="2"
                   maxLength="40"/>
            <span id="name-error" className="error"></span>
            <input type="text" className="popup__input popup__input_info_job" name="job" required
                   minLength="2"
                   maxLength="200"/>
            <span id="job-error" className="error"></span>
        </>
)
}

export default PopupEditProfile;