// Form and Sidebar

const hobbiesResult = document.querySelector("#hobbies-result")
const transportResult = document.querySelector("#transport-result");
const musicResult = document.querySelector("#music-result"); 

const radioButtons = document.querySelectorAll('input[name="transport-method"]');
const musicDropdown = document.getElementById("music-preference");

musicResult.textContent = musicDropdown.value;

//capturing the event object and adding event listener to the checkbox
document.querySelector("#sports-checkbox").addEventListener("change", ($event) => {
    if ($event.target.checked) { 
        hobbiesResult.children[0].classList.remove("gray-text");
    } else {
        hobbiesResult.children[0].classList.add("gray-text");
    }
});

document.querySelector("#games-checkbox").addEventListener("change", ($event) => {
    if ($event.target.checked) { 
        hobbiesResult.children[1].classList.remove("gray-text");
    } else {
        hobbiesResult.children[1].classList.add("gray-text");
    }
});

document.querySelector("#music-checkbox").addEventListener("change", ($event) => {
    if ($event.target.checked) { 
        hobbiesResult.children[2].classList.remove("gray-text");
    } else {
        hobbiesResult.children[2].classList.add("gray-text");
    }
});

/*
*Radio buttons event listeners
*/

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", ($event) => {
        transportResult.textContent = $event.target.value;
    });
}

/*
*Dropsdown menu event listeners
*/

musicDropdown.addEventListener("change", ($event) => {
    musicResult.textContent = $event.target.value;
});
//******************************************************************

//Reference holders for password and button

const passwordInput = document.querySelector("#password-input");
const submitButton = document.querySelector("#submit-button");

const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector("#error-message");

// passwordInput.addEventListener("input", (e) => {
//     if (e.target.value.length >= 6 && e.target.value.length <= 12) {
//         //submitButton.removeAttribute("disabled");
//     } else {
//         submitButton.setAttribute("disabled", "true");
//     }
// });

confirmPassword.addEventListener("blur", () => {//remove error message and apply green classList
    if (passwordInput.value === confirmPassword.value && passwordInput.value.length >= 6 && confirmPassword.value.length <= 12 ) {
        passwordInput.style.border = "thin solid green";
        confirmPassword.style.border = "thin solid green";
        errorMessage.style.display = "none";
        submitButton.removeAttribute("disabled");
    } else {//show error message and apply red classList
        passwordInput.style.border = "thin solid red";
        confirmPassword.style.border = "thin solid red";
        errorMessage.style.display = "inline";
        submitButton.setAttribute("disabled", "true");
    }
});

//*****************************************************************************************
//Access DoM elements

const reportSection = document.querySelector("wether-report");
const cityForm = document.querySelector("city-form");
const cityInput = document.querySelector("city");

// Prepare openweathermap.org request
let apiRequest = new XMLHttpRequest();

/* 
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
*/

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const chosenCity = cityInput.value;
    apiRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e'); apiRequest.send();

});

apiRequest.onreadystatechange = () => {
    if (apiRequest.ready === 4) {
        if (apiRequest.status === 404) {
            return reportSection.textContent = "City not found!";
        }
        const response  = JSON.parse(apiRequest.response);
        reportSection.textContent = `The weather in` + response.name + `is` + response.weather[0].main + `.`;
    }
}










