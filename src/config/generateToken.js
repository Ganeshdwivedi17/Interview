import jwt from "jsonwebtoken";

export const generateToken = (email, isAdmin) => {
  return jwt.sign(
    { email, isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "5h",
    }
  );
};
