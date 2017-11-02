// Polyfill solution to reduce the number of polyfils for evergreen browsers
// https://github.com/angular/angular-cli/issues/6577
import * as checkBrowser from 'check-browser';
let evergreenBrowser = checkBrowser({
    chrome: 49,
    firefox: 52,
    edge: 14,
    safari: 10
});

declare var System: any;

/** Import basic polyfills required by Angular itself */
import './polyfills.browser-basic';

/** Import optional polyfills to target browsers */
if (!evergreenBrowser) {
    System.import('./polyfills.browser-extra');
}