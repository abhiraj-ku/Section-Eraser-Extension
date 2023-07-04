chrome.runtime.onMessage.addListener(function () {
  selectedSection = null;
  document.addEventListener("click", handleSectionSelection, { once: true });
});
