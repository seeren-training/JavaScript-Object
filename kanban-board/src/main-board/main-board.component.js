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
        document.querySelector("main").innerHTML = template();
        this.columnList.display();
    }

}
