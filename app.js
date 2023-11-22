const rootEl = document.getElementById("rootEl");
const acctEl = document.getElementById("acctEl");
const alertEl = document.getElementById("alertEl");
const dropdownEl = document.getElementById("dropdownEl");
const alertDropdownEl = document.getElementById("alertDropdownEl");
const toastEl = document.getElementById("toastEl");
const toastMobileCloseEl = document.getElementById("toastMobileCloseEl");
const toastDesktopCloseEl = document.getElementById("toastDesktopCloseEl");

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
