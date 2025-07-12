import { Router } from "express";
import { TripController } from "../controllers/Trip.controller";
import { GoogleAPIService } from "../services/GoogleAPI.service";
import { validate } from "../middlewares/validate";
import { pickDropSchema } from "../schemas/locationsSchema";

const router = Router();
const googleAPIService = new GoogleAPIService();
const tripController = new TripController(googleAPIService);

router.post("/calculate-fare", validate(pickDropSchema), (req, res, next) =>
  tripController.calculateFare(req, res, next),
);

export default router;
