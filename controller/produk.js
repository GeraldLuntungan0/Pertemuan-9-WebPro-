import produk from "../model/produkModel.js";

export const getproduk = async (req, res) => {
  try {
    const response = await produk.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getprodukById = async (req, res) => {
  try {
    const response = await produk.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createproduk = async (req, res) => {
  try {
    await produk.create(req.body);
    res.status(201).json({ msg: "Produk created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteproduk = async (req, res) => {
  try {
    await produk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Produk deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateproduk = async (req, res) => {
  try {
    await produk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Produk updated" });
  } catch {
    console.log(error.message);
  }
};
