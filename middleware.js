import { NextResponse } from "next/server";
function middleware(_request) {
  return NextResponse.next();
}
const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"
  ]
};
export {
  config,
  middleware
};
