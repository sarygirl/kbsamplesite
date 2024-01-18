const form = document.querySelector("form");
const firstName= document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
const bodyMessage = `Full Name: ${firstName.value}<br> Last Name: ${lastName.value}<br>
 Email: ${email.value}<br> Message: ${mess.value}<br> `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "phailee2017@gmail.com",
        Password : "7E3EF4ED375C334016CEDA1CD187B35585F9",
        To : 'saryannescurel@gmail.com',
        From : 'phailee2017@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})