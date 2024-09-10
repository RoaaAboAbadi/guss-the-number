const inp = document.getElementById("inp");
const guss = document.getElementById("guss");
const attempts = document.getElementById("attempts");
let tries = document.getElementById("tries");
const inputContainer = document.querySelector(".input-container");
const moreLessContainer = document.querySelector(".more-less-container");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let loseAudio = document.getElementById("lose-audio");
let winAudio = document.getElementById("win-audio");




guss.addEventListener("click", gusstheNumber)

const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber, "randomNumber")

function gusstheNumber() {
    let triesNumber = parseInt(tries.textContent);
    console.log(triesNumber, "triesNumber")

    let message = [];

    let inpValue = inp.value;

    if (inpValue < randomNumber) {
        console.log("The entered value is less than the random number.")
        message.push("The entered value is less than the random number.")

    }
    else if (inpValue > randomNumber) {
        console.log("The entered value is greater than the random number.")
        message.push("The entered value is greater than the random number.")

    }
    else {
        console.log("The entered value is equal to the random number.");
        message.push("The entered value is equal to the random number.")
    }


    // moreLessContainer.innerHTML = ""
    if (message.length > 0) {
        moreLessContainer.innerHTML = ""
        console.log(inputContainer, "inputContainer")
        triesNumber--;
        tries.textContent = triesNumber;
        if (triesNumber == 0) {
            lose.style.display = "flex"
            loseAudio.play();
        }
        console.log(message, "2222s22")
        if (message.includes("The entered value is less than the random number.")) {
            const lessBtn = document.getElementById('less-button');
            if (lessBtn == null) {
                const lessButton = document.createElement("button");
                console.log(inputContainer, "kkkkkkkkkkkkk")
                lessButton.textContent = " The entered value is less than the random number.";
                lessButton.id = "less-button";
                lessButton.classList.add("less");
                moreLessContainer.appendChild(lessButton);
            } else {
                lessBtn.textContent = " adsa The entered value is less than the random number";
            }
        }
        else if (message.includes("The entered value is greater than the random number.")) {
            const moreBtn = document.getElementById('more-button');
            if (moreBtn == null) {
                const moreButton = document.createElement("button");
                moreButton.textContent = " The entered value is greater than the random number";
                moreButton.id = "more-button";
                moreButton.classList.add("more");
                moreLessContainer.appendChild(moreButton);
            } else {
                moreBtn.textContent = " The entered value is greater than the random number.";
            }
        }
        else {
            // const equalButton = document.createElement("button");
            // equalButton.textContent = "The entered value is equal to the random number.";
            // equalButton.id = "equal-button";
            // equalButton.classList.add("equal");
            // moreLessContainer.appendChild(equalButton);
            win.style.display = "flex"
            winAudio.play();
        }
    }

}

