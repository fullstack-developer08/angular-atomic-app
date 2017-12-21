import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Plan, Feature, FeatureMap } from 'angular-atomic-library';
import 'rxjs/add/operator/map';
/**
 * PricingService for
 *     getting the price list for online services
 */
@Injectable()
export class PlanService {

    public plans: Observable<Plan[]>;
    public features: Observable<FeatureMap[]>;

    constructor(
        private http: HttpClient,
        public store: Store<AppStore>
    ) {
        this.plans = <Observable<Plan[]>> store.select('plans');
        this.features = <Observable<FeatureMap[]>> store.select('features');
    }

    public loadPlans(type: string): Observable<any> {
        return this.http.get(BASE_URL_PLANS + '?type=' + type);
         //   .catch(this.handleError);
    }

    public loadFeatures(): Observable<any> {
        return this.http.get(BASE_URL_FEATURES);
          //  .catch(this.handleError);
    }

    // this could also be a private method of the component class
  /*  private handleError(error: any): Observable<any> {
        // log error
        // could be something more sofisticated
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        // throw an application level error
        return Observable.of(errMsg);
    }
*/
}
