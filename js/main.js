<<<<<<< HEAD
/**
* GLOBAL JAVASCRIPT
*/


/* Global */

function search() {
    prompt("What are you looking for?")
}

function callToAction() {
    alert("Thank you!")
}

function submitForm() {
    alert("You are signed in!")
}

function requestPassword() {
    prompt("Tell us your email")
}
=======
/* scripts */

function toggleMenu() {
    const button = document.getElementById("toggle-button");
    const menu = document.getElementById("toggle-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.innerHTML = `<i class="fas fa-bars"></i>`;
      } else {
        menu.style.display = "block";
        button.innerHTML = `<i class="fas fa-times"></i>`;
      };

};

function search() {
    // TODO
}
>>>>>>> 2033c2e8406321de1b68e64e865251dc792dcf44
