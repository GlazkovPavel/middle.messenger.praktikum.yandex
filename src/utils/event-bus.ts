type Handler = (...args: any) => void;

export class EventBus {

    private readonly listeners: any;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Handler) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Handler) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: any) => listener !== callback
        );
    }

    emit(event: string, ...args: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener: any) {
            listener(...args);
        });
    }
}
