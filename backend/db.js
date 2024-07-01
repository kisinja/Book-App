const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/NEWBOOKSTORE')
            .then(() => console.log('MongoDB connected'));
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

module.exports = { connectDB };