import { Request } from "express";

export interface Location {
  latitude: number;
  longitude: number;
}

// Interface for fare calculation request
export interface FareRequest extends Request {
  body: {
    pickup: Location;
    drop: Location;
  };
}

// Interface for Google Routes API response
export interface RouteMatrixResponse {
  originIndex: number;
  destinationIndex: number;
  status: {
    code: number;
  };
  distanceMeters: number;
  duration: string;
  condition: string;
}
