import { Router } from "express";
const router = Router();

import * as productController from "../controllers/products.controller";


import { authJwt } from "../middlewars";

router.post('/', [authJwt.verifyToken, authJwt.isModerador], productController.createProducto);

router.get('/', productController.getProducto)

router.get('/:productId', productController.getProductoById)

router.put('/:productId',[authJwt.verifyToken, authJwt.isAdmin], productController.updateProducto)

router.delete('/:productId',  [authJwt.verifyToken, authJwt.isAdmin], productController.deleteProductoById)



export default router;