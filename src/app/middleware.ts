import { NextRequest, NextResponse } from "next/server";
import { parse } from "tldts";
export function middleware(req: NextRequest) {
  const hostName = req.headers.get("host") || "";
  const subdomain = parse(hostName).subdomain || "daraz";
  const url = req.nextUrl.clone();
  url.searchParams.set("subdomain", subdomain);
  return NextResponse.rewrite(url);
}
