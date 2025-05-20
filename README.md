# FreeMotionGear

This project demonstrates basic Firebase usage for authentication and Firestore operations.

## Setup

1. Install dependencies (requires network access):
   ```bash
   npm install firebase
   ```
2. Provide your Firebase configuration using environment variables:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`

## Usage

Example usage of the helper functions:

```javascript
const { signUp, signIn } = require('./src/auth');
const { saveUserProfile, addProduct } = require('./src/firestore');

async function demo() {
  // Sign up or sign in a user
  const user = await signUp('user@example.com', 'password123');
  // const user = await signIn('user@example.com', 'password123');

  // Save user profile
  await saveUserProfile(user.uid, { displayName: 'Demo User' });

  // Add a product
  const productId = await addProduct({ name: 'Demo Product', price: 99.99 });
  console.log('Created product with ID:', productId);
}

demo();
```

This code requires valid Firebase project credentials. Contact the project maintainer for API keys.
