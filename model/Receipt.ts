import * as mongoose from 'mongoose';

export interface IItem extends mongoose.Document {
    quantity: number;
    name: string;
    price: number;
}

export const ItemSchema: mongoose.Schema = new mongoose.Schema({
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
    shakes: IItem[];
    snacks: IItem[];
    subTotal: number;
    tax: number;
    total: number;
    cashReceived: number;
    change: number;
}

export const ReceiptSchema: mongoose.Schema = new mongoose.Schema({
    shakes: [Item],
    snacks: [Item],
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
});

export const Receipt = mongoose.model<IReceipt>("receipt", ReceiptSchema);