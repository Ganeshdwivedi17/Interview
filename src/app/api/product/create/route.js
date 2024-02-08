import Product from "../../../../model/productModel";
import connect from "../../../../config/dbconfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connect();
    const { title, description, price, thumbnail, category } = await req.json();
    const product = new Product({
      title,
      description,
      price,
      thumbnail,
      category,
    });
    const savedProduct = await product.save();
    return NextResponse.json({
      message: "Product added successfully",
      success: true,
      savedProduct,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
