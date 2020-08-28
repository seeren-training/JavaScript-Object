import $ from 'jquery';

import { ProgressComponent } from '../../shared/components/progress.component';
import { ColumnService } from "../../shared/services/column.service";
import { Column } from "../../shared/models/column.model";

import { template } from "./column-list.component.html";

export class ColumnListComponent {

    constructor() {

        /**
         *  @type {ColumnService}
         */
        this.service = new ColumnService();

        /**
         * @type {ProgressComponent}
         */
        this.progress = new ProgressComponent;

    }

    display() {
        $(".column-list").html(template(this.service.columnList));
        $(".btn-add-column").click(() => this.onPost());
        this.service.columnList.forEach((column, index) => {
            $(`.btn-delete-column-${index}`).click(() => this.onDelete(column));
            const title = $(`.title-column-${index}`);
            title.click(() => this.onEditTitle(title, column));
        });
        if (!this.service.fetched) {
            this.onGet();
        }
    }

    /**
     * @event
     * @param {JQuery<HTMLElement>} title 
     * @param {Column} column 
     */
    onEditTitle(title, column) {
        title.off();
        const input = $("<input>");
        title.html("").append(input);
        input.focus();
        input.attr("value", column.title);
        input.blur(() => this.onSubmitTitle(input, column));
        input.keypress((e) => 13 === e.keyCode ? this.onSubmitTitle(input, column) : null);
    }

    /**
     * @event
     * @param {JQuery<HTMLElement>} input 
     * @param {Column} column 
     */
    onSubmitTitle(input, column) {
        column.title = `${input.val()}`;
        this.onPut();
    }

    /**
     * @event
     */
    onGet() {
        this.service.get().then(columnList => {
            this.service.set(columnList);
            this.display();
        });
        this.progress.display();
    }

    /**
     * @event
     */
    onPost() {
        this.service.post().then(() => this.display());
        this.display();
        this.progress.display();
    }

    /**
     * @event
     */
    onPut() {
        this.service.put().then(() => this.display());
        this.progress.display();
    }

    /**
     * @event
     * @param {Column} column 
     */
    onDelete(column) {
        this.service.delete(column).then(() => this.display());
        this.display();
        this.progress.display();
    }

}
