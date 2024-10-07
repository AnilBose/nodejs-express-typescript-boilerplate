import { createLogger, format, transports } from "winston";

const customFormat = format.combine(
  format.colorize(),
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(
    ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
  )
);

const logger = createLogger({
  level: "debug",
  format: customFormat,
  transports: [
    new transports.Console({ handleExceptions: true }),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
  exitOnError: false,
});

export default logger;
