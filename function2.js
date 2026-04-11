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
        else if (mood === "sillymood") {

        document.body.style.backgroundColor = "#aaaa5c";

        message.innerText = "Same I am feeling like hohahoumho ho😋";

        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;
         });
    }

    else if (mood === "embarssedmood") {

        document.body.style.backgroundColor = "#00008B";

        message.innerText = "Don't be nobody cares enough for you to be embarrsed 😀";

        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;
         });
    }

    else if (mood === "concernedmood") {

        document.body.style.backgroundColor = "orange";

        message.innerText = "Don't worry everything will be fine ☺️";

        fetch("https://api.adviceslip.com/advice")

         .then(response => response.json())

         .then(data => {

            something.innerText = data.slip.advice;
         });

    }
    else if (mood === 'anxiousmood') {

        document.body.style.backgroundColor = "#301934";

        message.innerText = "Hey everything will be fine I am with you 😁";

        fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });

    }

    else if (mood === "nervousmood") {

        document.body.style.backgroundColor = "#8B8000";

        message.innerText = "will look around you there is nothing to be nervous about except your exams 😅";

        fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });
    }
    else if (mood === "shymood") {
        document.body.style.backgroundColor = "#668b00";

        message.innerText = "we all get shy sometimes 🤭";

        fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });
    }
    else if (mood === "annoyedmood") {

        document.body.style.backgroundColor = "#8b0051";

        message.innerText = "Take a deep breath and sit somewhere where you feel relaxed ☺️";

        this.fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });
    }
    else if (mood === "hungarymood") {

        this.document.body.style.backgroundColor = "#26143d";

        message.innerText = "Then eat something silly 🤭";

        this.fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });
    }
    else if (mood === "scaredmood") {
        this.document.body.style.backgroundColor = "#2c0046";

        message.innerText = "I am here with you don't have to be scared 😁";

        fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {

            something.innerText = data.slip.advice;
        });
    }
    else if (mood === "confusedmood") {
        this.document.body.style.backgroundColor = "#3b2079";

        message.innerText = "Well let us understand the situation 😀";

        this.fetch("https://api.adviceslip.com/advice")

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

