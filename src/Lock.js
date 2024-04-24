export default class Lock {

    #locked;

    lock = () => {
        this.#locked = true;
    }

    getIsLocked = () => {
        return this.#locked;
    }
}