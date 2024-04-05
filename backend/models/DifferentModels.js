const mongoose = require('mongoose');

const url = process.env.DB_URL;
mongoose.connect(`mongodb://127.0.0.1:27017/${url}`)
    .then(() => console.log("Connection Successfully ..."))
    .catch((error) => console.log(error));




const AuthSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const FoodSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const adminDetails = mongoose.model('adminDetails', AuthSchema);
const foodDetails = mongoose.model('foodDetails', FoodSchema);

module.exports = {
    adminDetails,
    foodDetails
}
