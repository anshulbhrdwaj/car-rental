import axios from "axios";
import { Config } from "../config";

export const googleRoutesApiClient = axios.create({
  baseURL: Config.GOOGLE_ROUTES_API_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json", // Set default content type
    "X-Goog-Api-Key": Config.GOOGLE_API_KEY,
    "X-Goog-FieldMask":
      "originIndex,destinationIndex,duration,distanceMeters,status,condition",
  },
});
