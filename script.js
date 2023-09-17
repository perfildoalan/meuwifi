function copiar() {
  
    // Get the text field
    var copyText = document.getElementById("password");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    toastOn("Senha " + copyText.value + " copiada");
    setTimeout (() => {toastOff("Senha " + copyText.value + " copiada")}, 2000);

}

function toastOn(value) {
    var toastOn = document.getElementById("toast-off")
    toastOn.textContent = value;
    toastOn.id = "toast-on";
}

function toastOff(value) {
    var toastOff = document.getElementById("toast-on")
    toastOff.textContent = value;
    toastOff.id = "toast-off";
}

document.getElementById("SSID").addEventListener("mousedown", function(event){
    event.preventDefault();
  });