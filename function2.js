window.onload = function () {
    let mood = localStorage.getItem("mood");
    let message = document.getElementById("resultmessage")
    let something = document.getElementById("something")

    if (mood === "happymood") {

        document.body.style.backgroundColor = "yellow";

        message.innerText = "Thats amazing keep smiling😁";

        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {
            console.log(data)

            something.innerText = data.slip.advice;

         });
    }
    else if (mood === "sadmood") {

        document.body.style.backgroundColor = "lightblue";

        message.innerText = "Don't worry things get better😀";


        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;

         });
    }
    else if (mood === "angrymood") {

        document.body.style.backgroundColor = "red";

        message.innerText = "Who hurt my pookie!!🤬";


        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;

         });
    }
    else if (mood === "chillmood") {

        document.body.style.backgroundColor = "green";

        message.innerText = "great enjoy your relaxed time!!☺️";

        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;
         });
    }
}
    document.addEventListener("DOMContentLoaded", (event) => {

    const button = document.getElementById("mybutton")

    button.addEventListener("click",function() {

        window.location.href = "index.html";

            });
});

