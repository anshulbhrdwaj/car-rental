import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const {
  PORT = 8000,
  NODE_ENV = "development",
  JWT_REFRESH_TOKEN_SECRET,
  JWKS_URI,
  DOMAIN,
  BASE_FARE = 50,
  PER_KM_RATE = 12,
  MINIMUM_BILLABLE_DISTANCE = 3,
  GOOGLE_ROUTES_API_URL = "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix",
  GOOGLE_API_KEY,
} = process.env;

export const Config = {
  PORT,
  NODE_ENV,
  JWT_REFRESH_TOKEN_SECRET,
  JWKS_URI,
  DOMAIN,
  BASE_FARE: Number(BASE_FARE),
  PER_KM_RATE: Number(PER_KM_RATE),
  MINIMUM_BILLABLE_DISTANCE: Number(MINIMUM_BILLABLE_DISTANCE),
  GOOGLE_ROUTES_API_URL,
  GOOGLE_API_KEY,
};
