
const outputAnswer = document.querySelector(".answer");

function evaluateEfterloen() {
    event.preventDefault();
  
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let birthyear = document.querySelector('#birthyear').value;
    let numberOfYearsMembership = document.querySelector('#yearsofmembership').value;

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear -  birthyear;
    
    if (age >= 30 && numberOfYearsMembership >= 25)
    {
        outputAnswer.textContent = "Kære " + firstname + " " + lastname +". Du er kvalificeret til efterlønsordningen. For nærmere info kontakt din A-Kasse.";
    } else {
        outputAnswer.textContent = "Kære " + firstname + " " + lastname + ". Du er ikke kvalificeret til efterlønsordningen. Kontakt din A-Kasse hvis du har spørgsmål.";
    }
}
