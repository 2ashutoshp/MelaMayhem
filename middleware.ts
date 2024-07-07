// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/events:id(.*)",
//   "/api/webhook/clerk(.*)",
//   "/api/webhook/stripe(.*)",
//   "api/uploadthing(.*)",
//   "/sign-in(.*)",
//   "/sign-up(.*)"
// ]);

// export default clerkMiddleware((auth, request) => {
//   if (isPublicRoute(request)) return; // if it's a public route, do nothing
//   if (!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};