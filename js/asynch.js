// Accessin the DOM
const result = document.querySelector("#result");
 
let approval = "Not Approved!";

function getApproval() {
    setTimeout(() => {
        approval = "Approved!";                                              
    }, 500);
}

getApproval();
result.textContent = approval;