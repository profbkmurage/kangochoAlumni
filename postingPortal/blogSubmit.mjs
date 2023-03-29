import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, query, orderBy, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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

window.addEventListener('load', async function() {
    const blogRef = collection(db, 'kAlumniAnnouncements')
    const blogData = await getDocs(query(blogRef, orderBy('createdAt', 'desc')))
    const blogs = blogData.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    })

    renderBlogs(blogs);
})


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



$('#blogSubmit').addEventListener('submit', async function(e){
    e.preventDefault()
    alert('submission in progress...');
    const titlle = $('#titlle').value
    const content = $('#content').value
    const createdAt = new Date().toISOString();

    $('#blog').textContent = 'Submitting';
    // posting to db
    await addDoc(collection(db, 'kAlumniAnnouncements'), { titlle, content, createdAt })
    $('#blog').textContent = 'submit'
    alert('Announcement created successfully')

    // clear the form
    $('#titlle').value = ''
    $('#content').value = ''
})



onSnapshot(collection(db, 'kAlumniAnnouncements'), function (data) {
    const blogs = data.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
    })

    renderBlogs(blogs);
})

// <img style="height:50vh; " src="../img/kas.jpg" class="img-fluid">


function renderBlogs(blogs) {
    $('#blogData').innerHTML = blogs.map((blog) =>
    `           <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <div class="card mb-2 shadow-sm">
                        <div class="card-body">
                            <div class="card-title">
                                <h4> ${blog.titlle}</h4> 
                            <div class="d-flex flex-row justify-content-space-between">
                                    <p style="margin-right: 1rem;">${blog.createdAt.substring(0, 10)}</p>        
                            </div>                
                            </div>                            
                            <div class="card-text">
                                <p class="mr-3">${blog.content}</p>
                                </div>
                            <hr>
                            <button type="button" class="btn btn-primary btn-outline-success text-center" >K-Alumni Announcements</button>
                    </div>
                </div>
                </div>
    `).join('');
}

