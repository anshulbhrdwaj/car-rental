import { NextFunction, Response } from "express";
import { FareRequest } from "../types";
import logger from "../config/logger";
import { Config } from "../config";
import { GoogleAPIService } from "../services/GoogleAPI.service";
import createHttpError from "http-errors";
import { ERROR_MESSAGES, STATUS_CODES } from "../constants/status";

export class TripController {
  constructor(private googleAPIService: GoogleAPIService) {}

  async calculateFare(req: FareRequest, res: Response, next: NextFunction) {
    const { BASE_FARE, PER_KM_RATE, MINIMUM_BILLABLE_DISTANCE } = Config;

    function calculateTotalFare(distanceKm: number): number {
      const billableDistance = Math.max(distanceKm, MINIMUM_BILLABLE_DISTANCE);

      const totalFare = BASE_FARE + billableDistance * PER_KM_RATE;

      return Math.round(totalFare);
    }

    try {
      const { pickup, drop } = req.body;

      // Get driving distance from Google API
      const distanceKm = await this.googleAPIService.getDrivingDistance(
        pickup,
        drop,
      );

      if (!distanceKm) {
        throw createHttpError(
          STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE_ENTITY,
          ERROR_MESSAGES.DISTANCE_CALCULATION_FAILED,
        );
      }

      // Calculate fare
      const fare = calculateTotalFare(distanceKm);

      logger.debug(`Calculated fare: ${fare} for distance: ${distanceKm} km`, {
        pickup: pickup,
        drop: drop,
        actualDistance: Math.round(distanceKm * 100) / 100, // Round to 2 decimal places
        billableDistance: Math.max(distanceKm, MINIMUM_BILLABLE_DISTANCE),
        baseFare: BASE_FARE,
        perKmRate: PER_KM_RATE,
        totalFare: fare,
        currency: "INR",
      });

      res.json({
        totalFare: fare,
        currency: "INR",
      });
    } catch (error) {
      logger.error("Error calculating fare:", error);
      next(error);
    }
  }
}
