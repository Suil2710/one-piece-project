// Var to select the class "button" one-for-one in the list
const buttons = document.querySelectorAll('.button');

const characters = document.querySelectorAll(".character");

// Remove class "selected.button" and add in other div
buttons.forEach((button, indice) => {
    button.addEventListener("click", () => {
        const selectedButton = document.querySelector(".selected.button");

        selectedButton.classList.remove("selected");
        
        button.classList.add("selected");

        const selectedCharacter = document.querySelector(".selected.character");

        selectedCharacter.classList.remove("selected");

        characters[indice].classList.add("selected");
    });
});