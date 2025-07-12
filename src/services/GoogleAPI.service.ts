import { Location, RouteMatrixResponse } from "../types";
import { googleRoutesApiClient } from "../utils/api-client";

export class GoogleAPIService {
  constructor() {}

  async getDrivingDistance(pickup: Location, drop: Location): Promise<number> {
    try {
      const requestBody = {
        origins: [
          {
            waypoint: {
              location: {
                latLng: {
                  latitude: pickup.latitude,
                  longitude: pickup.longitude,
                },
              },
            },
          },
        ],
        destinations: [
          {
            waypoint: {
              location: {
                latLng: {
                  latitude: drop.latitude,
                  longitude: drop.longitude,
                },
              },
            },
          },
        ],
        travelMode: "DRIVE",
      };

      const response = await googleRoutesApiClient.post<RouteMatrixResponse[]>(
        "/",
        requestBody,
      );

      if (response.data && response.data.length > 0) {
        const routeData: RouteMatrixResponse = response.data[0];

        // Check if the route was found successfully
        if (routeData.status.code === 0) {
          // Convert meters to kilometers
          const distanceKm = routeData.distanceMeters / 1000;
          return distanceKm;
        } else {
          throw new Error("Route not found or inaccessible");
        }
      } else {
        throw new Error("No route data received from Google API");
      }
    } catch (error) {
      console.error("Error calling Google Routes API:", error);
      throw new Error("Failed to calculate distance");
    }
  }
}
