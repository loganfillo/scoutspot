import { initAuth0 } from '@auth0/nextjs-auth0';

const config = {}

if (typeof window === 'undefined') {
    /**
     * Settings exposed to the server.
     */
    config = {
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_SCOPE: process.env.AUTH0_SCOPE,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        API_AUDIENCE: process.env.API_AUDIENCE,
        API_BASE_URL: process.env.API_BASE_URL,
        REDIRECT_URI: process.env.REDIRECT_URI,
        POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
        SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
        SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME
    };
} else {
    /**
     * Settings exposed to the client.
     */
    config = {
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_SCOPE: process.env.AUTH0_SCOPE,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        REDIRECT_URI: process.env.REDIRECT_URI,
        POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
    };
}

export default initAuth0({
  audience: config.API_AUDIENCE,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  scope: config.AUTH0_SCOPE,
  domain: config.AUTH0_DOMAIN,
  redirectUri: config.REDIRECT_URI,
  postLogoutRedirectUri: config.POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: config.SESSION_COOKIE_SECRET,
    cookieLifetime: config.SESSION_COOKIE_LIFETIME,
    storeIdToken: true,
    storeRefreshToken: true,
    storeAccessToken: true
  }
});