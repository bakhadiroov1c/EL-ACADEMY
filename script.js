let telegram_bot_id = "5684726011:AAEbAEUOaTE1wQyD_Tdy1setU2xzFOAoUH0";
let chat_id = 1754400979;
let name, subject, phone;
let ready = function () {
    name = document.getElementById("name").value;
    subject = document.getElementById("subject").value;
    phone = document.getElementById("phone").value;
    message = "Ismi: " + name + "\nFan: " + subject +  "\nTelefon raqami: " + phone
};
function sendmessage() {
    event.preventDefault();
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        playOn();
        // console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("phone").value = "";
    return false;
};
let playOn = () => new Audio("on.mp3").play();