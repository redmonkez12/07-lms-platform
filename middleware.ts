import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/api/uploadthing"],
});

export const config = {
    matches: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)",
    ]
};