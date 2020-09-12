import { Cart } from './cart.model';

export interface Receipt {
    items: Cart[];
    subTotal: number;
    tax: number;
    total: number;
    cashReceived: number;
    change: number;
    createdAt?: Date;
    createdBy?: string | number;
}