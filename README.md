# Budget App

## Setup

1. setup firebase project
2. copy firebase web config keys and export them from `src/environments/excludes/firebaseConfig.ts` and `src/environments/excludes/firebaseConfig.prod.ts`

```typescript
// example firebaseConfig.ts, correct config can be found in firebase console
export default {
  apiKey: "example",
  authDomain: "example.firebaseapp.com",
  databaseURL: "https://example.firebaseio.com",
  projectId: "example",
  storageBucket: "example",
  messagingSenderId: "example"
};
```

3. enable firebase auth providers in firebase console: email authentication, google authentication
4. enable firestore database
