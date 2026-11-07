
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");

const url = document.getElementById("url");
const btn = document.getElementById("button");

btn.addEventListener("click", function(event) {

    event.preventDefault();

    let inputName = nameInput.value.trim();
    let inputYear = yearInput.value;

    let givenurl = "https://localhost:8080/";

    if (inputName !== "") {
        givenurl += "?name=" + encodeURIComponent(inputName);
    }

    if (inputYear !== "") {

        if (inputName !== "") {
            givenurl += "&year=" + inputYear;
        }
        else {
            givenurl += "?year=" + inputYear;
        }
    }

    url.innerHTML = givenurl;

});

