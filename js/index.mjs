// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
    addDoc,
    onSnapshot,
    collection,
    getFirestore
  } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Jau7gHLA97MjlAbxVLTCfz34DDnmCcs",
  authDomain: "kangochoalumniassociatio-28104.firebaseapp.com",
  projectId: "kangochoalumniassociatio-28104",
  storageBucket: "kangochoalumniassociatio-28104.appspot.com",
  messagingSenderId: "459622601145",
  appId: "1:459622601145:web:8c05a8a03191328543a668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

// create a function to create a sth in the db
// export async function createProduct(productDetails) {
//     try {
//       await addDoc(collection(db, products), productDetails);
//     } catch (error) {
//       console.log(error);
//     }
//   }

function $(selector) {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 1) {
        return elements[0]
    }
    return elements

}

// contact us form
$('#contactForm').addEventListener('submit', async function(e){
    e.preventDefault()
    alert('submission in progress...');
    const name = $('#name').value
    const email = $('#email').value
    const phoneNumber =$('#phoneNumber').value;
    const subject = $('#subject').value
    const message = $('#message').value
    const createdAt = new Date().toISOString();

    $('#sendMessageButton').textmessage = 'submission in progress...'
    // posting to db
    await addDoc(collection(db, 'contact'), { name,phoneNumber, subject, message,email, createdAt })
    $('#sendMessageButton').textmessage = 'submit'
    alert('product created successfully')

    // clear the form
    $('#email').value = ''
    $('#name').value = ''
    $('#phoneNumber').value = ''
    $('#subject').value = ''
    $('#message').value = ''
})


// sign up form