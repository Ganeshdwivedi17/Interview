import Product from "../../../../../model/productModel";
import connect from "../../../../../config/dbconfig";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connect();
    const slug = context.params.slug;
    console.log("this is slug", slug);
    await Product.findOneAndDelete({ title: slug });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "error in delete" });
  }
}
