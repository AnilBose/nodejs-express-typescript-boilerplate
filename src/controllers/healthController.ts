import { Request, Response } from "express";
import { HealthService } from "../services/healthService";
import { validateHealthDto } from "../dtos/healthDto";
import { sendResponse } from "../utils/helper";

const healthService = new HealthService();

export const getHealth = async (req: Request, res: Response) => {
  const status = await healthService.checkHealth();
  sendResponse(res, 200, "Health check successful", { status });
};

export const postHealth = async (req: Request, res: Response) => {
  try {
    const healthData = validateHealthDto(req.body);
    const savedData = await healthService.saveHealthData(healthData.status);
    sendResponse(res, 201, "Health status updated", savedData);
  } catch (error: any) {
    sendResponse(res, 400, error.message);
  }
};
