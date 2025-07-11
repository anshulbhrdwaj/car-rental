import express from "express";
import ApiErrorHandler from "./middlewares/ErrorHandler";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(
  express.static(path.join(__dirname, "../public"), { dotfiles: "allow" }),
);
app.use(cookieParser());
app.use(express.json());

// app.use("/calculate-fare", calculateFareRouter);

app.use(ApiErrorHandler);

export default app;
