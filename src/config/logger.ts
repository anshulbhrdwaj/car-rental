import winston from "winston";
import { Config } from ".";
import moment from "moment";

const { NODE_ENV } = Config;
const isProduction = NODE_ENV === "production";

const { File, Console } = winston.transports;
const { label, timestamp, printf, json, combine } = winston.format;

// Format for logs
const messageFormat = printf((info) => {
  const { level, message, timestamp, label, serviceName, ...meta } = info;
  const time = moment(timestamp as string)?.format("Do MMMM YYYY, h:mm:ss a");

  const metaString = Object.keys(meta).length
    ? `--> ${JSON.stringify(meta)}`
    : "";

  return `${time} ${label as string} ${serviceName as string} ${level}: ${message as string} ${metaString}`;
});

// Create custom format
const customFormat = combine(
  label({ label: "🔔" }),
  timestamp(),
  json(),
  messageFormat,
);

// Create logger
const logger = winston.createLogger({
  level: "silly",
  defaultMeta: {
    serviceName: "WTFTOOLS Backend Service",
  },
  format: customFormat,
  transports: [
    new File({
      level: "error",
      dirname: "logs",
      filename: "errors.log",
      silent: !isProduction,
    }),
    new File({
      level: "info",
      dirname: "logs",
      filename: "combined.log",
      silent: !isProduction,
    }),
    new Console({
      level: "info",
    }),
  ],
});

export default logger;
