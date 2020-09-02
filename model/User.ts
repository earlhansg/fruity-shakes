import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  entryId: number;
  firstName: string;
  lastName: string;
  gender: string;
}

export const UserSchema: mongoose.Schema = new mongoose.Schema({
    entryId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

export const User = mongoose.model<IUser>("user", UserSchema);