const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { app } = require('./firebase');

const auth = getAuth(app);

/**
 * Sign up a new user with email and password.
 */
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

/**
 * Sign in an existing user with email and password.
 */
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

module.exports = { signUp, signIn };
