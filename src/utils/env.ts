import dotenv from "dotenv";

dotenv.config();

export const getFirebaseCredentials = () => {
  if (!process.env.FIREBASE_CREDENTIALS) {
    throw new Error("FIREBASE_CREDENTIALS not set in .env file");
  }
  return JSON.parse(process.env.FIREBASE_CREDENTIALS);
};