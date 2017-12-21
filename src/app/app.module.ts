import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { PlansModule } from './plans';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { localStorageSync } from 'ngrx-store-localstorage';
import { counterReducer } from './common/reducers/counter';
import { planInitState, planReducer } from './common/reducers/plan';
import { featuresInitState, featuresReducer } from './common/reducers/features';
import { orderInitState, orderReducer } from './common/reducers/order';
import { shoppingCartReducer } from './common/reducers/shopping-cart';
import { userInitState, userReducer } from './common/reducers/user';
import { FeaturesEffects } from './common/effects/features.effects';
import { ConsoleLogService } from './common/logging/console-log.service';
import { Logger } from './common/logging/default-log.service';
import { PlanService } from './common/services/plan.service';
import { AppStateService } from './common/services/app-state.service';
import { LayoutModule } from 'angular-atomic-library';

import { RegisterGuard } from './common/guards/register.guard';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AppStateService,
  [
    {
      provide: Logger,
      useClass: ConsoleLogService
    }
  ],
  PlanService,
  RegisterGuard,
//  CookieService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' })
  };
}

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
  localStorageSync({keys: ['user', 'plans', 'features'], rehydrate : true}), 
    combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  return appReducer(state, action);
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true, //Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot({
      plans: planReducer,
      features: featuresReducer,
      user: userReducer,
      order: orderReducer,
      shoppingCart: shoppingCartReducer,
      counter: counterReducer
    }),
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
//    PricingPlansModule,
    LayoutModule,
    PlansModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
