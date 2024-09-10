import mongoose from "mongoose";

const Connection = async () => {
    try {
      await  mongoose.connect("mongodb://127.0.0.1:27017/user-app");
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;