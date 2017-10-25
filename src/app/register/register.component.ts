import {
    Component,
    OnInit,
    OnChanges,
    Input
} from '@angular/core';

import { Router } from '@angular/router';

import { Store, Action } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';
import { Logger } from '../common/logging/default-log.service';

import { User } from 'angular-atomic-library';
import { UPDATE_USER } from '../common/reducers/user';

import * as _ from 'lodash';

@Component({
    selector: 'user-registration',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    constructor(private logger: Logger,
                private store: Store<AppStore>,
                private router: Router) { }

    public onSave($event): void {
        console.log('Saved: ' + JSON.stringify($event));
        this.store.dispatch(<Action> { type: UPDATE_USER, payload: $event });
        this.router.navigate(['/summary']);
    }
}
