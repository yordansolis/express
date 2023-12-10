import Product from "../models/Product"
export const createProducto = async (req, res) => {

    const { name, category, price, imgUrl } = req.body;
    const newProduct = new Product({ name, category, price, imgUrl });
    console.log(newProduct);
    const productSave = await newProduct.save();

    res.status(201).json({
        productSave
    })
}

export const getProducto = async (req, res) => {

    const products = await Product.find();
    res.status(200).json(products);
}

export const getProductoById = async (req, res) => {
    const updateProduct = await Product.findById(req.params.productId)
    res.status(200).json(updateProduct);
}
export const updateProducto = async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updateProduct);
}
export const deleteProductoById = async (req, res) => {
    const prodcutDelete = await Product.findByIdAndDelete(req.params.productId)

    res.status(200).json(prodcutDelete)
}