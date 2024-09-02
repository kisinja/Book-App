const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log('MongoDB connected'));
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

module.exports = { connectDB };