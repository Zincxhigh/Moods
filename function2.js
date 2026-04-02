window.onload = function () {
    let mood = localStorage.getItem("mood");
    let message = document.getElementById("resultmessage")
    if (mood === "happymood") {
        document.body.style.backgroundColor = "yellow";
        message.innerText = "Thats amazing keep smiling😁";
    }
    else if (mood === "sadmood") {
         document.body.style.backgroundColor = "lightblue";
        message.innerText = "Don't worry things get better😀";
    }
    else if (mood === "angrymood") {
         document.body.style.backgroundColor = "red";
        message.innerText = "Who hurt my pookie!!🤬";
    }
    else if (mood === "chillmood") {
         document.body.style.backgroundColor = "green";
        message.innerText = "great enjoy your relaxed time!!☺️";
    }
}
    document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("mybutton")
    button.addEventListener("click",function() {
        window.location.href = "index.html";
            });
});

