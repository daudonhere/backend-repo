import { Request } from "express";
import { admin } from "@/config/firebaseConfig";

export interface AuthEntities extends Request {
    user?: admin.auth.DecodedIdToken;
}