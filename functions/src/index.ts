import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { populateDefaultCategories } from "./populateDefaultCategories";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

export const createUserHook = functions
  .region("europe-west1")
  .auth.user()
  .onCreate(async user => {
    return await populateDefaultCategories(user).catch(console.error);
  });
