import connect from "@/config/dbconfig";
import Product from "@/model/productModel";
import { NextResponse } from "next/server";

export async function PUT(req, context) {
  try {
    await connect();
    const slug = context.params.slug;
    const product = await Product.findOne({ title: slug });
    const { title, price, thumbnail, description, category } = await req.json();
    const updatedproduct = await Product.findByIdAndUpdate(product._id, {
      ...(!title ? {} : { title }),
      ...(!description ? {} : { description }),
      ...(!price ? {} : { price }),
      ...(!thumbnail ? {} : { thumbnail }),
      ...(!category ? {} : { category }),
    }, { new: true });

    console.log(updatedproduct, 'updated product')
    if (!updatedproduct) {
      return NextResponse.json({ message: "Product not found" });
    }
    return NextResponse.json({ message: "Product updated" });
  } catch (error) {
    console
    return NextResponse.json({ message: "Something went wrong", error: error });
  }
}
