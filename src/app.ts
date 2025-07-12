import express from "express";
import ApiErrorHandler from "./middlewares/ErrorHandler";
import cookieParser from "cookie-parser";
import path from "path";
import tripRouter from "./routes/trip.routes";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(
  express.static(path.join(__dirname, "../public"), { dotfiles: "allow" }),
);
app.use(cookieParser());
app.use(express.json());
app.use(limiter);

app.use("/trip", tripRouter);

app.use(ApiErrorHandler);

export default app;
