const button = document.querySelector("button");
const demoEl = document.querySelector(".effect3d");
button.addEventListener("click", e => {
  demoEl.classList.remove('effect3d');
  setTimeout(() => {
    demoEl.classList.add('effect3d');
  }, 0);
  demoEl.classList.toggle('reverse');
});



function redirectToURL() {
  window.location.href = "https://acrobat.adobe.com/id/urn:aaid:sc:ap:6946e40b-1484-4c64-afa6-afcb9c3f7bbd";  // Replace with your URL
  
}
