const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connections = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB connected: ${connections.connection.host} server`.cyan.underline
        .bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}.red`);
    process.exit(1);
  }
};

module.exports = connectDB;
