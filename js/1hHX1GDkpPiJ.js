document.getElementById('copyText').addEventListener('click', function() {
  // Create a temporary input field
  var tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = this.innerText;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Optional: Show a confirmation message
  alert('CA copied ' + tempInput.value);
});
