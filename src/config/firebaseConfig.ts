import admin from "firebase-admin";
import { getFirebaseCredentials } from "@/utils/env";

const serviceAccount = getFirebaseCredentials();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
export const auth = admin.auth();