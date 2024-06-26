import Lock from "../src/Lock.js";

export default class Diary {

    #allEntries = [];
    #lock;

    constructor(newLock = new Lock()) {
        this.#lock = newLock;
    }

    getAllEntries() {
        return this.#allEntries;
    };

    addEntry(newEntry) {
        (newEntry !== null) && this.#allEntries.push(newEntry);
    }

    getEntry(date) {
        for (let i = 0; i <= this.#allEntries.length; i++) {
            if (this.#allEntries[i].getDate() === date) {
                return this.#allEntries[i];
            } 
        return undefined;  
        }
    }

    getLock() {
        return this.#lock;
    }
 };