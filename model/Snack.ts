import * as mongoose from 'mongoose';

export interface ISnack extends mongoose.Document {
  name: string;
  price: number;
  imageUrl: string;
}

export const SnackSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

export const Snack = mongoose.model<ISnack>("snack", SnackSchema);