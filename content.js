var selectedSection = null;

chrome.runtime.onMessage.addListener(function () {
  selectedSection = null;
  document.addEventListener("click", handleSectionSelection, { once: true });
});

function handleSectionSelection(event) {
  selectedSection = event.target;
  console.log(selectedSection);
  selectedSection.style.display = "none";
}
