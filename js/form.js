// Form and Sidebar

const hobbiesResult = document.querySelector("#hobbies-result");
const transportResult = document.querySelector("#transport-result");
const musicResult = document.querySelector("#music-result"); 

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







