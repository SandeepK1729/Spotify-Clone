const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        await mongoose.connect(
            process.env.MONGO_CONNECTION_STRING, 
            connectionParams
        );
        console.log("Database connection successfully");
    }
    catch(err) {
        console.log("Database connection failure ...")
    }
}