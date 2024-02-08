import Product from "../../../../model/productModel";
import connect from "../../../../config/dbconfig";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  await connect();

  try {
    const slug = context.params.slug;

    console.log("id in server ok123", slug);
    const product = await Product.findOne({ title: slug });
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
