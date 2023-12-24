// Intializing important variables
const optionItems = document.querySelectorAll(".options-items");
const passResult = document.querySelector(".pass-result");
const passLength = document.querySelector(".pass-length");
const randomButton = document.querySelector(".random-btn");

const copyButton = document.querySelector(".copy-btn")
const copyPopup = document.querySelector(".copy-popup")

class passoword {
     constructor() {
          this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          this.lowerCase = "abcdefghijklmnopqrstuvwxyz";
          this.specialChar = "!@#$%^&*-_";
          this.passNumbers = "1234567890";
          this.funnyPass = ["Passoword", "Funny", "Mazak", "Joke", "HaHa123!", "LaughOutLoud", "TickleMeFunny", "GiggleFactory42", "ROFLcopter!", "ChuckNorrisJokes", "SmileMoreOften", "BananaPeelSlip", "KnockKnockWho", "PenguinWearingTutu",];
     }
     generateRandomPassoword(length) {
          const passPattern = `${this.upperCase}${this.lowerCase}${this.specialChar}${this.passNumbers}`;
          let storePassValue = "";
          let i = 0;
          while (i < length) {
               const randomIndexNum = passPattern[Math.floor(Math.random() * passPattern.length)];
               storePassValue += randomIndexNum;
               i++;
          }
          return storePassValue;
     }

     getRandomPassoword(length, characters) {
          const passChar = characters;
          let storePassoword = "";
          let r = 0;

          while (r < length) {
               const randomPassCharIndex = passChar[Math.floor(Math.random() * passChar.length)];
               storePassoword += randomPassCharIndex;
               r++;
          }
          passResult.innerHTML = storePassoword;
          return storePassoword;
     }

     generateSpecialPassoword(length) {
          const specialPassoword = `${this.passNumbers}${this.specialChar}${this.upperCase}`;
          return this.getRandomPassoword(length, specialPassoword);
     }

     generateUpperCasePassoword(length) {
          const upperCasePassoword = this.upperCase;
          return this.getRandomPassoword(length, upperCasePassoword)
     }

     generateLowerCasePassoword(length) {
          const lowerCasePassoword = this.lowerCase;
          return this.getRandomPassoword(length, lowerCasePassoword);
     }

     generateProfessionalPassoword(length) {
          const professionalPassoword = `${this.specialChar}${this.lowerCase}${this.passNumbers}${this.upperCase}`;
          return this.getRandomPassoword(length, professionalPassoword);
     }

     generateFunnyPassoword() {
          const funnyPass = this.funnyPass;
          const randomFunnyLocation = funnyPass[Math.floor(Math.random() * funnyPass.length)]

          passResult.innerHTML = randomFunnyLocation;
          return randomFunnyLocation;
     }

     generateWeakPassoword(length) {
          const weachChar = this.passNumbers;
          return this.getRandomPassoword(length, weachChar);
     }
}



// addEventLister for randomButton
randomButton.addEventListener("click", () => {
     const passLengthInputValue = passLength.value.trim();
     if (passLength.value.trim() !== "") {
          let callRandomPassoword = new passoword().generateRandomPassoword(passLengthInputValue);
          passResult.innerHTML = callRandomPassoword;
     } else {
          return;
     }

})



// addEventLister for randomButton all optionItems
optionItems.forEach((element) => {
     element.addEventListener("click", () => {
          const passLengthInputValue = passLength.value.trim();

          switch (element.id) {
               case "special":
                    new passoword().generateSpecialPassoword(passLengthInputValue);
                    break;
               case "upperCase":
                    new passoword().generateUpperCasePassoword(passLengthInputValue);
                    break;
               case "lowerCase":
                    new passoword().generateLowerCasePassoword(passLengthInputValue);
                    break;
               case "professional":
                    new passoword().generateProfessionalPassoword(passLengthInputValue);
                    break;
               case "weak":
                    new passoword().generateWeakPassoword(passLengthInputValue);
                    break;
               case "funny":
                    new passoword().generateFunnyPassoword(passLengthInputValue);
                    break;
               default:
                    break;
          }
     })
})

// copyButton eventListener
copyButton.addEventListener('click', () => {
     const resultValue = passResult.innerHTML;
     navigator.clipboard.writeText(resultValue);
     copyPopup.innerHTML = `Passoword copied with ${resultValue}`;
     copyPopup.style.display = "block";

     setTimeout(() => {
          copyPopup.style.display = "none";
     }, 3000)
})