import * as imgPhotoVideo from "../../../../static/images/photo-video.svg";
import * as imgFile from "../../../../static/images/file.svg";
import * as imgLocation from "../../../../static/images/location.svg";

export const configChat = {
    photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
    name: 'Pavel',
    popup: {
        photoCard: {
            src: imgPhotoVideo,
            text: 'Photo and video'
        },
        file: {
            src: imgFile,
            text: 'File'
        },
        location: {
            src: imgLocation,
            text: 'Location'
        }
    }
};

export const configChatContact = {
    photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
    name: 'Pavel',
    message: 'Friends, I have a special news release for you!',
    timeMessage: '10:20',
    totalMessage: 2
};
