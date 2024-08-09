import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/AnimalDonation');
        console.log('database is connected...');
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;