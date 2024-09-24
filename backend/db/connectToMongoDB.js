import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        console.log(process.env.MONGO_DB_URL);

        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error conecting to MongoDB", error.message)
    }
};

export default connectToMongoDB;