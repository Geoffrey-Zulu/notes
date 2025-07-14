// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp_2SGYwCGXpaLU3WR0DzeY5dAwfMjEqE",
  authDomain: "notes-6ffa2.firebaseapp.com",
  projectId: "notes-6ffa2",
  storageBucket: "notes-6ffa2.firebasestorage.app",
  messagingSenderId: "611279610287",
  appId: "1:611279610287:web:93856f19ef2ba69acf8f5a",
  measurementId: "G-TH3SZ59KK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save a note to Firestore
export async function saveNote(note) {
  try {
    await addDoc(collection(db, "notes"), note);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

// Fetch all notes from Firestore
export async function fetchNotes() {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    return [];
  }
}

// Delete a note from Firestore by ID
export async function deleteNote(id) {
  try {
    await deleteDoc(doc(db, "notes", id));
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
} 