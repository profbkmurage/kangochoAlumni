import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, query, orderBy, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore(app)



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
    e.preventDefault()
    alert('submission in progress...');
    const name = $('#name').value
    const email = $('#email').value
    const subject = $('#subject').value
    const message = $('#message').value
    const createdAt = new Date().toISOString();

    $('#sendMessageButton').textmessage = 'submission in progress...'
    // posting to db
    await addDoc(collection(db, 'agroBiasharaContacts'), { email, name, subject, message, createdAt })
    $('#sendMessageButton').textmessage = 'submit'
    alert('product created successfully')

    // clear the form
    $('#email').value = ''
    $('#name').value = ''
    $('#subject').value = ''
    $('#message').value = ''
})

