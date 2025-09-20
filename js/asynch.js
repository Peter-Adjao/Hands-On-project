// Accessin the DOM
const result = document.querySelector("#result");
 
let approval = "Not Approved!";

function getApproval(callback) {
    setTimeout(() => {
        approval = "Approved!";
        callback();                                              
    }, 500);
}

getApproval(() => {
    result.textContent = approval;
});
result.textContent = approval;