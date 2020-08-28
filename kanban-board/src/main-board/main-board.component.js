import $ from 'jquery';

import { ColumnListComponent } from "./column-list/column-list.component";

import { template } from './main-board.component.html';

export class MainBoardComponent {

    constructor() {

        /**
         * @type {ColumnListComponent}
         */
        this.columnList = new ColumnListComponent();

    }

    display() {
        $("main").html(template());
        this.columnList.display();
    }

}
