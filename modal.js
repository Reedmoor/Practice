const popupOverlay = document.getElementById("modal");
const popup = document.getElementById("modal-content");
 
function showPopup() {
  popupOverlay.style.display = "block";
}
 
function hidePopup() {
  popupOverlay.style.display = "none";
}
 
popupOverlay.addEventListener("click", hidePopup);
popup.addEventListener("click", (event) => event.stopPropagation());