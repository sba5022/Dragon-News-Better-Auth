
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
export async function proxy(request) {
    console.log(request, "proxy request");
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session, "proxy session");
    // const isLoggedIn = true;
    if (session) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/login", request.url));

}
export const config = {
    matcher: ['/career', '/news/:path*'],
}