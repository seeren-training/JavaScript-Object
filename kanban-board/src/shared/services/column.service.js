import $ from 'jquery';

import { Column } from "../models/column.model";

/**
 * @type {String}
 */
const bin = "https://api.jsonbin.io/b/5f48f453514ec5112d102b02";

/**
 * @type {String}
 */
const key = "$2a$10$t7NQV0SJWhqIUaR0lidxAOrjP8o3Nv7lG3VySw3zjaCU14vZF0X.y";

export class ColumnService {

    constructor() {

        /**
         * @type {Array<Column>}
         */
        this.columnList = [];

        /**
         * @type {Boolean}
         */
        this.fetched = false;

    }

    /**
     * @returns {JQuery.jqXHR}
     */
    get() {
        this.fetched = true;
        return $.ajax(bin, { method: "GET", headers: { "secret-key": key, } });
    }

    /**
     * @param {Array<Column>} columnList 
     */
    set(columnList) {
        this.columnList = columnList;
    }

    /**
     * @param {Column} column 
     * @returns {JQuery.jqXHR}
     */
    post(column = null) {
        this.columnList.push(column || new Column("Column title"));
        return this.put();
    }

    /**
     * @returns {JQuery.jqXHR}
     */
    put() {
        return $.ajax(bin, {
            method: "PUT",
            headers: {
                "secret-key": key,
                "Content-Type": "application/json",
                "versioning": "false"
            },
            data: JSON.stringify(this.columnList)
        });
    }

    /**
     * @param {Column} column 
     * @returns {JQuery.jqXHR}
     */
    delete(column) {
        this.columnList.splice(this.columnList.indexOf(column), 1);
        return this.put();
    }

}
