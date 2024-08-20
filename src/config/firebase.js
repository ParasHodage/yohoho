// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiIY9I3GpoT_Apoj-1-mrGmkN-xCi7tfE",
	authDomain: "next-fire-yt-5522a.firebaseapp.com",
	projectId: "next-fire-yt-5522a",
	storageBucket: "next-fire-yt-5522a.appspot.com",
	messagingSenderId: "888666798596",
	appId: "1:888666798596:web:33bc0bf7cbc5418c7b1351"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }

export default app
