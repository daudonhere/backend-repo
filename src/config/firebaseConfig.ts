import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
export { admin, db };