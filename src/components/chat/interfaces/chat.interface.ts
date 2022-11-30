export interface IChat {
    photo: string;
    name: string;
    popup: {
        photoCard: {
            src: any,
            text: string;
        },
        file: {
            src: any,
            text: string;
        },
        location: {
            src: any,
            text: string;
        }
    }
}
