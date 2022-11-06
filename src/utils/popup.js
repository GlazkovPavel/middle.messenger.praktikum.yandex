import {escape} from "../const/const";

export default class Popup {

    _isOpenPopup = false;

    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
    }

    _handleEscClose = (evt) => {
        if (evt.key === escape) {
            this.close();
        }
    };

    _handelMouseDownClose = (evt) => {
        if (!evt.target.classList.contains('popup_opened') && !evt.target.classList.contains('attachment')
            && !evt.target.offsetParent.classList.contains('popup_opened')) {
            this.close();
        }
    }

    getIsOlenPopup() {
        return this._isOpenPopup;
    }

    open() {
        this.popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._isOpenPopup = true;
    };

    close() {
        this.popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handelMouseDownClose);
        this._isOpenPopup = false;
    }

    setEventListener() {
        document.addEventListener('mousedown', this._handelMouseDownClose)

    }
}
