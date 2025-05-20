const { getFirestore, doc, setDoc, collection, addDoc } = require('firebase/firestore');
const { app } = require('./firebase');

const db = getFirestore(app);

/**
 * Save user profile information in the "users" collection.
 */
async function saveUserProfile(userId, profileData) {
  try {
    await setDoc(doc(db, 'users', userId), profileData);
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

/**
 * Add a new product to the "products" collection.
 */
async function addProduct(productData) {
  try {
    const docRef = await addDoc(collection(db, 'products'), productData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
}

module.exports = { saveUserProfile, addProduct };
