import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connect to MongoDB without deprecated options
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        
        // Log success message
        console.log("DB Connected successfully");
    } catch (error) {
        // Log error message if the connection fails
        console.error("DB Connection Error:", error.message);
        process.exit(1); // Exit the process with failure code
    }

    // Optional: Additional event listeners
    mongoose.connection.on('disconnected', () => {
        console.log("DB Disconnected");
    });

    mongoose.connection.on('error', (err) => {
        console.error("DB Connection Error:", err.message);
    });
};

export default connectDB;
