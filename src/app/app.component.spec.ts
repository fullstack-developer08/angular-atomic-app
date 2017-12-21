/* tslint:disable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

/**
 * Load the implementations that should be tested
 */
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { PlanService } from './common/services/plan.service';
import { AppStateService } from './common/services/app-state.service';
import { compose } from '@ngrx/core/compose';
import { RegisterGuard } from './common/guards/register.guard';
// Add the import the module from the package 
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './common/reducers/counter';
import { planInitState, planReducer } from './common/reducers/plan';
import { featuresInitState, featuresReducer } from './common/reducers/features';
import { orderInitState, orderReducer } from './common/reducers/order';
import { shoppingCartReducer } from './common/reducers/shopping-cart';
import { userInitState, userReducer } from './common/reducers/user';
import { FeaturesEffects } from './common/effects/features.effects';
import { ConsoleLogService } from './common/logging/console-log.service';
import { Logger } from './common/logging/default-log.service';

const reducers = {
  plans: planReducer,
  features: featuresReducer,
  user: userReducer,
  order: orderReducer,
  shoppingCart: shoppingCartReducer,
  counter: counterReducer
};
const initialReducerState = {
  plans: planInitState,
  features: featuresInitState,
  user: userInitState,
  order: orderInitState
};
const appReducer = compose(
  localStorageSync({keys: ['user'], rehydrate : true}), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  return appReducer(state, action);
}

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  /**
   * async beforeEach
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.provideStore(rootReducer, initialReducerState)
      ],
      providers: [AppState,
        PlanService,
        AppStateService,
        RegisterGuard,]
    })
    /**
     * Compile template and css
     */
    .compileComponents();
  }));

  /**
   * Synchronous beforeEach
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    /**
     * Trigger initial data binding
     */
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should be @TipeIO`, () => {
    expect(comp.twitter).toEqual('https://twitter.com/gdi2290');
    expect(comp.tipe).toEqual('assets/img/tipe.png');
    expect(comp.name).toEqual('Angular Starter');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
