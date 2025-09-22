// // Accessin the DOM using assyn call
// const result = document.querySelector("#result");
 
// let approval = "Not Approved!";

// function getApproval(callback) {
//     setTimeout(() => {
//         approval = "Approved!";
//         callback();                                              
//     }, 500);
// }

// getApproval(() => {
//     result.textContent = approval;
// });
// result.textContent = approval;
//************************************************************

/*
*Accessing and manipulating the Dom using async and promise
*/
// const result = document.querySelector("#result");
 
// let approval = "Not Approved!";

// function getApproval() {
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Approved!");
//     }, 500);
//    });
// }

// getApproval().then(
//     (resolvedApproval) => {
//         result.textContent = resolvedApproval;
//     }
// );
// result.textContent = approval;

/****************************************************************/

/*
*Accessing and manipulating the Dom using async/await
*/
const result = document.querySelector("#result");
 
let approval = "Not Approved!";

function getApproval() {
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Approved!");
    }, 500);
   });
}

async function setApprovalText() {
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
}

setApprovalText();

// *****************************************************************

// Get form elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-button');

const url = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

//const url = "https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site";

// Get DOM elements for showing response
const responseMessage = document.getElementById('response-message');
const responseTitle = document.getElementById('response-title');
const responseContent = document.getElementById('response-content');
const responseId = document.getElementById('response-id');

//Adding eventlistener to the button
submitButton.addEventListener("click", ($event) => {
    $event.preventDefault();
    const post = {
        title: titleInput.value,
        content: contentInput.value
    };
    submitFormData(post);
});

function makeRequest(data) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("POST", url + "/create-post");
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {  
                    reject(JSON.parse(request.response));
                }
            }
        };
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));
    });
}

async function submitFormData(post) {
    try {
        const requestPromise = makeRequest(post);
        const response = await requestPromise;
        responseMessage.textContent = response.message;
        responseTitle.textContent = response.post.title;
        responseId.textContent = response.post.id;
        responseContent.textContent = response.post.content;
    } catch (errorResponse) {
         responseMessage.textContent = errorResponse.error;
    }
}