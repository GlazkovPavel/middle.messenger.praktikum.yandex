import {escape} from "../../../../const/const";

export class PopupAttachment {

    _isOpenPopup = false;
    private popupElement: HTMLElement | null;

    constructor(popupSelector: string) {
        this.popupElement = document.querySelector(popupSelector);
    }

    _handleEscClose = (evt: { key: string; }) => {
        if (evt.key === escape) {
            this.close();
        }
    };

    _handelMouseDownClose = (evt: any) => {
        const popupNotOpened = !evt.target.classList.contains('popup_opened');
        const hasNoAttachments = !evt.target.classList.contains('attachment');
        const parentPopupNotOpened = !evt.target.offsetParent.classList.contains('popup_opened');
        if (popupNotOpened && hasNoAttachments && parentPopupNotOpened) {
            this.close();
        }
    }

    getIsOlenPopup() {
        return this._isOpenPopup;
    }

    open() {
        this._isOpenPopup = true;
        this.popupElement!.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this.popupElement!.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handelMouseDownClose);
        this._isOpenPopup = false;
    }

    setEventListener() {
        document.addEventListener('mousedown', this._handelMouseDownClose)

    }
}
