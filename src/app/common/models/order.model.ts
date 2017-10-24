import { ShoppingCart } from 'angular-atomic-library';
import { Address } from './address.model';

export interface Order {
    id?: string;
    orderDate?: string;
    orderValue?: number;
    status?: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    shoppingCart?: ShoppingCart;
}
