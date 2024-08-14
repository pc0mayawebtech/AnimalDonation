import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        }
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    yourMessage: {
        type: String,
        required: true,
        trim: true,
    },
    passwordResetToken: {
        type: String,
        required: true,
        trim: true,
    }
});

const userdb = new mongoose.model("contact", userSchema);

export default userdb;