import mongoose, { Schema, Document } from 'mongoose';

// Интерфейс для типа данных пользователя
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    full_name: string;
    profile_image?: string;
}

// Схема пользователя
const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    profile_image: {
        type: String,
        default: 'default.jpg',
    },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
