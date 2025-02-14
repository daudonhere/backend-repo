import { Response } from "express";

export const handleError = (res: Response, error: unknown, message: string): void => {
  console.error(message, error);
  res.status(500).json({ error: message });
};