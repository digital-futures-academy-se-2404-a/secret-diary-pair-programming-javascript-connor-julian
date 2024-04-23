export default class Entry{
    #date;

    constructor(newDate = new Date()) {
        this.#date = newDate;
    }

    getDate() {
        return this.#date;
    }
}