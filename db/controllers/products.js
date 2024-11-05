const getAllproductsStatic = async (req, res) => {
  throw new Error("Testing async errors");
  res.status(200).json({ msg: "products testing route" });
};

const getAllproducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = { getAllproducts, getAllproductsStatic };
