import { Jwt } from "jsonwebtoken";
import { NextResponse } from "next/server";

export function middleware(req, res, next) {

    const oldtoken = req.headers.authorization;
    const token = oldtoken.replace('Bearer ', "");
    console.log(token)
    if (!token) {
        return NextResponse.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, 'book-store');
        console.log(decoded)

        return NextResponse.next();
    } catch (error) {
        console.error('Error verifying token:', error.message);
        return NextResponse.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

export const config = {
    matcher: ['/product/create', '/product/update'],
}