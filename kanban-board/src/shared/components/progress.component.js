import $ from 'jquery';

import { template } from './progress.component.html';

export class ProgressComponent {

    display() {
        $(".progress").html(template());
    }

}
