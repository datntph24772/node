import express from "express";
import showProduct from "../controller/products"

const router=express.Router()
// Miiddleware
router.use((req, res, next) => {
    console.log(req.url);
    next()
})
router.get("/products",showProduct)
export default router