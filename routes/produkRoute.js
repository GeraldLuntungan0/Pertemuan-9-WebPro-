import express from "express";
import {
  getproduk,
  getprodukById,
  createproduk,
  updateproduk,
  deleteproduk,
} from "../controller/produk.js";

const router = express.Router();

// http://localhost:5000/produk
router.get("/produk", getproduk);
// http://localhost:5000/produk/1
router.get("/produk/:id", getprodukById);
// http://localhost:5000/produk
router.post("/produk", createproduk);
// http://localhost:5000/produk/1
router.patch("/produk/:id", updateproduk);
// http://localhost:5000/produk/1
router.delete("/produk/:id", deleteproduk);

export default router;
