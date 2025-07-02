  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBWgcpJC9885lTZid7h2XLHC4ZiKl8wRM8",
    authDomain: "journalapp-e04ff.firebaseapp.com",
    projectId: "journalapp-e04ff",
    storageBucket: "journalapp-e04ff.firebasestorage.app",
    messagingSenderId: "196711174571",
    appId: "1:196711174571:web:3fdb4fe3f12ed2722882ee"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  document.getElementById('supportForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;

    try {
      await addDoc(collection(db, "feedback"), {
        type,
        message,
        email,
        timestamp: Date.now() / 1000
      });
      document.getElementById('status').innerText = "Thank you! Your feedback was submitted.";
    } catch (error) {
      console.error("❌ Firestore error:", error);
      document.getElementById('status').innerText = "Error submitting feedback. Try again later.";
    }
  });