import express from "express";
import updateProduct from "../controller/update"

const router=express.Router()
// Miiddleware
router.use((req, res, next) => {
    console.log(req.url);
    next()
})
router.put("/products:id",updateProduct)
export default router