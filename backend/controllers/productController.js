const Product = require("../models/productModels.js");
const ErrorHander = require("../utils/errorhander.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const ApiFeatures = require("../utils/apifeatures");

// Create product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
});

// Get all product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const productCount = await Product.countDocuments();
    const resultPerPage = 5;
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(201).json({
        success: true,
        products,
        productCount,
    });
});

// update product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        usefindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    });

});

// Delete Product -- Admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);


    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    const productId = req.params.id;

    await product.deleteOne({ _id: productId });

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    });
});

// Get Product details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);


    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product
    });
});