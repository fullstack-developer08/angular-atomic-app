import { Plan, FeatureMap, Order , ShoppingCart , User } from 'angular-atomic-library';


/**
 * Application Store for state management
 */
export interface AppStore {
    user: User;
    order: Order;
    shoppingCart: ShoppingCart;
    plans: Plan[]; // Online plans
    features: FeatureMap[]; // Online plan features
};
