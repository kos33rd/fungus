import {Component} from '@angular/core';

@Component({
    selector: 'fungus-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id,
})
export class FungusAppComponent {
    isDarkTheme: boolean = false;
}
