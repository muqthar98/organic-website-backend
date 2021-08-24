import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is connected successfully");
  } catch (err) {
    console.log("Error", err.message);
  }
};

export default Connection;
