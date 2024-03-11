/**
    An array of routes that are accessible to the public
    These routes are not require authentication
    @type {string[]}
*/
export const publicRoutes = ["/",];

/**

    An array of routes that are accessible to the public
    These routes will redirect logged in users to /dashboard
    @type {string[]}
*/

export const authRoutes = ["/signin", "/signup", "/error"];

/**
 * The prefix for API authentication routes
 * These routes start with this prefix and are used for authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect route after a user logs in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
