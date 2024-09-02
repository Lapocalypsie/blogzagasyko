import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};

const isProtectedRoute = createRouteMatcher([
    '/admin(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        auth().protect();
    } else {
        // Set the x-robots-tag header to allow indexing on public routes
        const headers: Headers = req.headers;
        headers.set('x-robots-tag', 'index, follow');
    }
});
