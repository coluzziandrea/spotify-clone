import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "../../../lib/spotify";

class MyJwtToken {
  public token!: JWT;
  public accessToken: string | undefined;
  public refreshToken: string | undefined;
  public username: string | undefined;
  public accessTokenExpires: number | undefined;

  constructor(
    token: JWT,
    accessToken: string | undefined,
    refreshToken: string | undefined,
    username: string | undefined,
    accessTokenExpires: number | undefined
  ) {
    this.token = token;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.username = username;
    this.accessTokenExpires = accessTokenExpires;
  }
}

async function refreshAccessToken(token: MyJwtToken): MyJwtToken {
  try {
  } catch (error) {
    console.error(error);

    return {};
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET as string,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }): Promise<JWT | MyJwtToken | undefined> {
      // https://next-auth.js.org/tutorials/refresh-token-rotation

      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at! * 1000,
        } as MyJwtToken;
      }

      if (!(token instanceof MyJwtToken)) {
        throw new Error("Error in JWT token");
      }

      // if access token is still valid
      if (Date.now() < token.accessTokenExpires!) {
        console.log("EXISTING ACCESS TOKEN IS VALID");
        return token;
      }

      // access token expires
      console.log("EXISTING ACCESS TOKEN IS EXPIRED, REFRESHING...");
      return refreshAccessToken(token);
    },
  },
});
