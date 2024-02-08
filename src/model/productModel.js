import { mongoose, models } from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  thumbnail: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});
const Product = models.Product || mongoose.model("Product", productSchema);
export default Product;
