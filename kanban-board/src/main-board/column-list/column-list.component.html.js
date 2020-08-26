import { Column } from "../../shared/models/column.model";

/**
 * @param {Array<Column>} columnList 
 */
export const template = columnList => `
    <div class="col s6 add-column">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>
    <div class="row">
        ${ columnList.map((column, key) => `
        <div class="col s6 m4 l3 xl2 column column-${key}">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">
                        ${column.title}
                        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>
                    </span>
                    <p class="card-action">
                        <div class="input-field col s12 grey lighten-4">
                            <textarea id="textarea1" class="filled materialize-textarea"></textarea>
                            <label for="textarea1">Task</label>
                            <a class="col waves-effect waves-light btn">Create</a>
                        </div>
                        <span class="col s12 card-action">
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </span>
                    </p>
                </div>
            </div>
        </div>
        `).join('')}
    </div>
`;
