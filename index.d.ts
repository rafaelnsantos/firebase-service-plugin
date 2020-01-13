import * as admin from 'firebase-admin'

export interface Firebase {
  auth: admin.auth.Auth
}

export function FirebaseService (mockFunctions: () => Firebase): Firebase
