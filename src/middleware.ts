import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/dashboard", "/auth(.*)", "/portal(.*)", "/images(.*)"],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
