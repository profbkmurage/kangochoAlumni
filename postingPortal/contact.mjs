import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6Jau7gHLA97MjlAbxVLTCfz34DDnmCcs",
    authDomain: "kangochoalumniassociatio-28104.firebaseapp.com",
    databaseURL: "https://kangochoalumniassociatio-28104-default-rtdb.firebaseio.com",
    projectId: "kangochoalumniassociatio-28104",
    storageBucket: "kangochoalumniassociatio-28104.appspot.com",
    messagingSenderId: "459622601145",
    appId: "1:459622601145:web:8c05a8a03191328543a668"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



/** 
 * @param {string} selector 
 * @returns {NodeListOf<Element> | Element}
 */
// function to selecting the html elements
function $(selector) {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 1) {
        return elements[0]
    }
    return elements

}

$('#contactForm').addEventListener('submit', async function(e){
    e.preventDefault();
    alert('Submission in progress...');

    // Get the form data
    const name = $('#name').value;
    const email = $('#email').value;
    const subject = $('#subject').value;
    const message = $('#message').value;
    const createdAt = new Date().toISOString();

    // Update the button text
    $('#sendMessageButton').textContent = 'Submission in progress...';

    // Add the data to the database
    await addDoc(collection(db, 'kAlumniContacts'), { email, name, subject, message, createdAt });

    // Update the button text
    $('#sendMessageButton').textContent = 'Submit';
    alert('Submission successful!');

    // Clear the form
    $('#email').value = '';
    $('#name').value = '';
    $('#subject').value = '';
    $('#message').value = '';
});