const mongoose = require('mongoose');

uri = "mongodb+srv://ayushranjan:ayushranjan@firstapi.dvncd1r.mongodb.net/FirstApi?retryWrites=true&w=majority";

const connectDB = ()=>{
    return mongoose.connect(uri , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
}

module.exports = connectDB;