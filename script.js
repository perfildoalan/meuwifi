function copiar() {
  
// Get the text field
var copyText = document.getElementById("password");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

 // Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

// Alert the copied text
alert("Senha " + copyText.value + " copiada");

}