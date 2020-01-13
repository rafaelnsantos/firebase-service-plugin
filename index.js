const admin = require('firebase-admin')

exports.FirebaseService = (mockFunctions) => {
  if (process.env.NODE_ENV.includes('test') || process.env.NODE_ENV.includes('travis')) {
    return mockFunctions()
  } else {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL
      })
    })
    return {
      auth: admin.auth()
    }
  }
}
