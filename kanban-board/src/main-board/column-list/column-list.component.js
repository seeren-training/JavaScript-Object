import { ColumnService } from "../../shared/services/column.service";

import { template } from "./column-list.component.html";

export class ColumnListComponent {

    constructor() {

        /**
         *  @type {ColumnService}
         */
        this.service = new ColumnService();

    }

    display() {
        document.querySelector(".column-list").innerHTML = template(this.service.data);
    }

}
