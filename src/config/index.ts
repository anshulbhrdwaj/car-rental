import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const { PORT, NODE_ENV, JWT_REFRESH_TOKEN_SECRET, JWKS_URI, DOMAIN } =
  process.env;

export const Config = {
  PORT: PORT || 8000,
  NODE_ENV: NODE_ENV || "development",
  JWT_REFRESH_TOKEN_SECRET,
  JWKS_URI: JWKS_URI,
  DOMAIN,
};
