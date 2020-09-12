import * as mongoose from 'mongoose';
import { IUser } from '../model/User';
import { IShake } from '../model/Shake';
import { ISnack } from '../model/Snack';

export interface IItem extends mongoose.Document {
    _id: IShake['_id'] | ISnack['_id'];
    quantity: number;
    name: string;
    price: number;
}

export const ItemSchema: mongoose.Schema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Item = mongoose.model<IItem>("item", ItemSchema);

export interface IReceipt extends mongoose.Document {
    items: IItem[];
    subTotal: number;
    tax: number;
    total: number;
    cashReceived: number;
    change: number;
    createdAt?: Date;
    createdBy?: IUser['_id'];
}

export const ReceiptSchema: mongoose.Schema = new mongoose.Schema({
    items: {
        type: Array,
        required: false
    },
    subTotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cashReceived: {
        type: Number,
        required: true
    },
    change: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: false
    }
}, { versionKey: false });

export const Receipt = mongoose.model<IReceipt>("receipt", ReceiptSchema);