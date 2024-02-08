import connect from "../../../../config/dbconfig";
import User from "../../../../model/userModel";
import { NextResponse } from "next/server";
import argon2 from "argon2";

export async function POST(request) {
  await connect();
  try {
    const { name, email, password, picture, isAdmin } = await request.json();
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    //hash password
    const hashedPassword = await argon2.hash(password, {
      timeCost: 12, // Adjust based on your needs
      memoryCost: 2048, // Adjust based on your needs
      parallelism: 1, // Adjust based on your hardware
    });

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      picture,
      isAdmin,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
