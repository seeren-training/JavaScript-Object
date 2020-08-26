import { Column } from "../models/column.model";

export class ColumnService {

    constructor() {

        /**
         * @type {Array<Column>}
         */
        this.data = [
            new Column("TODO"),
            new Column("DOING"),
            new Column("DONE"),
            new Column("TODO"),
            new Column("DOING"),
            new Column("DONE"),
            new Column("TODO"),
            new Column("DOING"),
            new Column("DONE"),
        ];
    }

}
