const bcrypt = require('bcrypt');
const modals = require('../models/DifferentModels');

const getAuthenticate = async (req, res) => {
    try {
        const { authDetails } = req.body;
        if (authDetails.loginEmail == 'admin@gmail.com' && authDetails.loginPassword == 'admin@123') {
            res.status(200).send({ isValid: true });
        } else {
            res.status(200).send({ isValid: false });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ isValid: false });
    }
}

const getProducts = async (req, res) => {
    try {
        const { productDetails } = req.body;
        const product = new modals.foodDetails({
            image: productDetails.image,
            title: productDetails.title,
            description: productDetails.description,
        });
        const result = await product.save();
        res.status(200).send({ msg: true });
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: false });
    }
}
const getReceipeInfo = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await modals.foodDetails.find({ _id: id });

        res.status(200).send({ details: result, msg: true });
    } catch (error) {
        console.log(error);
        res.status(200).send({ msg: false });

    }
}
const getProductsDetails = async (req, res) => {
    try {
        const getProductsDetails = await modals.foodDetails.find();
        res.status(200).send({ resultProduct: getProductsDetails, msg: true });
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: false });
    }
}
module.exports = {
    getAuthenticate,
    getProducts,
    getReceipeInfo,
    getProductsDetails
}