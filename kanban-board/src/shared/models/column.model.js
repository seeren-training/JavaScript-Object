import { Task } from "./task.model";

export class Column {

    /**
     * @param {String} title 
     */
    constructor(title = "Title") {

        /**
         * @type {String}
         */
        this.title = title;

        /**
         * @type {Array<Task>}
         */
        this.taskList = [];

    }

}
