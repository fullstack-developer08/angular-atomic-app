import { Component, OnInit } from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { ADD_PLANS } from '../common/reducers/plan';
import { LOAD_FEATURES } from '../common/effects/features.effects';
import {
  Plan,
  Feature,
  FeatureMap,
  FeatureAvailability
} from 'angular-atomic-library';
import { AppStore } from '../common/models/appstore.model';
import { User } from 'angular-atomic-library';
import { PlanService } from '../common/services/plan.service';
import { AppStateService } from '../common/services/app-state.service';
import { Logger } from '../common/logging/default-log.service';
import * as _ from 'lodash';

@Component({
  selector: 'pricing-home',
  templateUrl: './pricing-home.component.html'
})
export class PricingHomeComponent implements OnInit {
  public user: Observable<User>;
  public plans: Observable<Plan[]>;
  public features: Observable<FeatureMap[]>;

  constructor(
    private store: Store<AppStore>,
    private logger: Logger,
    private planService: PlanService,
    private appStateService: AppStateService,
    private router: Router
  ) // private cookieService: CookieService
  {
    this.user = store.select('user');
    this.plans = this.planService.plans;
    this.features = this.planService.features;
  }

  public ngOnInit() {
    //   this.loadPlans();
  }

  public onSelectionEvent($event): void {
    let plan: Plan = $event;
    console.log(plan);
    this.router.navigate(['/plans']);
  }
}
