const rootEl = document.getElementById("rootEl");
const acctEl = document.getElementById("acctEl");
const alertEl = document.getElementById("alertEl");
const dropdownEl = document.getElementById("dropdownEl");
const alertDropdownEl = document.getElementById("alertDropdownEl");
const toastEl = document.getElementById("toastEl");
const toastMobileCloseEl = document.getElementById("toastMobileCloseEl");
const toastDesktopCloseEl = document.getElementById("toastDesktopCloseEl");
const setupGuideTogglerEl = document.getElementById("setupGuideTogglerEl");
const setupGuideBottomEl = document.getElementById("setupGuideBottomEl");
const setupGuideArrowEl = document.getElementById("setupGuideArrowEl");

const handleCloseToast = () => {
  toastEl.style.display = "none";
};

acctEl.addEventListener("click", (e) => {
  e.stopPropagation();
  const dropdownDisplay = window.getComputedStyle(dropdownEl).display;
  alertDropdownEl.display = "none";

  if (dropdownDisplay === "none") {
    dropdownEl.style.display = "flex";
  } else {
    dropdownEl.style.display = "none";
  }
});

alertEl.addEventListener("click", (e) => {
  e.stopPropagation();
  const alertDropdownDisplay = window.getComputedStyle(alertDropdownEl).display;
  dropdownEl.style.display = "none";

  if (alertDropdownDisplay === "none") {
    alertDropdownEl.style.display = "flex";
  } else {
    alertDropdownEl.style.display = "none";
  }
});

toastMobileCloseEl.addEventListener("click", handleCloseToast);
toastDesktopCloseEl.addEventListener("click", handleCloseToast);

document.addEventListener("click", (e) => {
  if (window.getComputedStyle(dropdownEl).display !== "none") {
    dropdownEl.style.display = "none";
  }

  if (window.getComputedStyle(alertDropdownEl).display !== "none") {
    alertDropdownEl.style.display = "none";
  }
});

setupGuideTogglerEl.addEventListener("click", () => {
  const setupGuideBtmHeight =
    window.getComputedStyle(setupGuideBottomEl).height;

  if (setupGuideBtmHeight === "200px") {
    setupGuideBottomEl.style.height = "0px";
    setupGuideBottomEl.style.visibility = "hidden";
    setupGuideBottomEl.style.opacity = "0";
    setupGuideArrowEl.style.rotate = "0deg";
  } else {
    setupGuideBottomEl.style.height = "200px";
    setupGuideBottomEl.style.visibility = "visible";
    setupGuideBottomEl.style.opacity = "1";
    setupGuideArrowEl.style.rotate = "180deg";
  }
});


