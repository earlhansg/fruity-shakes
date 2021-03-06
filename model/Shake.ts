import * as mongoose from 'mongoose';

export interface IShake extends mongoose.Document {
  name: string;
  price: number;
  imageUrl: string;
}

export const ShakeSchema: mongoose.Schema = new mongoose.Schema({
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

export const Shake = mongoose.model<IShake>("shake", ShakeSchema);