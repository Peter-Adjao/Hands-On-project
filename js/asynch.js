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
const result = document.querySelector("#result");
 
let approval = "Not Approved!";

function getApproval() {
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Approved!");
    }, 500);
   });
}

getApproval().then(
    (resolvedApproval) => {
        result.textContent = resolvedApproval;
    }
);
result.textContent = approval;