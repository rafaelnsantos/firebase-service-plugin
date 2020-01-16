# Firebase Service Plugin

Firebase plugin for create-graphql-express(auth only)

## Instalation

```sh
npm install --save firebase-service-plugin
```

## Configuration

Create file `firebase-service.ts` inside services folder.

Mock the used functions(needed for tests)

```ts
import { FirebaseService } from 'firebase-service-plugin'

export default FirebaseService(() => {
  let mockAuth: any
  return {
    auth: {
      verifyIdToken: async (token, checkRevoked) => {
        const { uid, email } = JSON.parse(token)
        const mockRes: any = {
          uid,
          email
        }
        return mockRes
      }
    },
    ...mockAuth
  }
})
```

Include firebase in `services.d.ts` (it has to be the same name as the file created above without -service)

```ts
import { Firebase } from 'firebase-service-plugin'

export interface Services {
  firebase: Firebase;
}
```

Set environment variables in `.env.dev` eg.:

```
FIREBASE_PROJECT_ID="adasd"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nasdasdasdasdad==\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-bmgz9@asdasdasdad.gserviceaccount.com"
```
