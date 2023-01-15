// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const auth = getAuth();


function $(selector) {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 1) {
        return elements[0]
    }
    return elements
}

// logged in logged out classes

$('#signUp').addEventListener('click', function(e) {    
e.preventDefault()
alert('begin')
var email = $('#signUpEmail').value;
var password = $('#signUpPassword').value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      alert(user, "Registration successfully!!");
            // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });		  		  
});
// login sequence
	  
$("#signInForm").addEventListener("click", function(e) {
    e.preventDefault();
        var email =  $("#emailSignIn").value;
        var password = $("#passwordSignIn").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
        alert(user.email+" Login successfully!!!");
       $('.modal').style.display="none";
    //    window.open('../index.html');
        console.log(user)
        if (user.accessToken) {
            window.open('../index.html')
        }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });		  		  
    });
    //----- End

  