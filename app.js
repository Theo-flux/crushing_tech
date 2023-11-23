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
const personalizedGuideEls = document.querySelectorAll(".personalized_guides");

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

  console.log(setupGuideBtmHeight);
  console.log(setupGuideBottomEl.offsetHeight);

  if (setupGuideBtmHeight === "400px") {
    setupGuideBottomEl.style.height = "0px";
    setupGuideBottomEl.style.visibility = "hidden";
    setupGuideBottomEl.style.opacity = "0";
    setupGuideArrowEl.style.rotate = "0deg";
  } else {
    setupGuideBottomEl.style.height = "400px";
    setupGuideBottomEl.style.visibility = "visible";
    setupGuideBottomEl.style.opacity = "1";
    setupGuideArrowEl.style.rotate = "180deg";
  }
});

personalizedGuideEls.forEach((element, index) => {
  const targetPEl = element.children[0].children[1];
  const inputCheck = element.children[0].children[0].children[0].children[0];

  targetPEl.addEventListener("click", () => {
    const isOtherExpanded = [].indexOf.call(
      personalizedGuideEls,
      document.querySelector(".expanded_guide"),
    );
    const isThisExpanded = targetPEl.classList.contains("expanded_guide_title");

    if (isThisExpanded) {
      personalizedGuideEls[index].classList.remove("expanded_guide");
      personalizedGuideEls[index].children[1].classList.remove(
        "expanded_guide_details",
      );
      targetPEl.classList.remove("expanded_guide_title");
    }
    personalizedGuideEls[isOtherExpanded].classList.remove("expanded_guide");
    personalizedGuideEls[isOtherExpanded].children[1].classList.remove(
      "expanded_guide_details",
    );
    personalizedGuideEls[
      isOtherExpanded
    ].children[0].children[1].classList.remove("expanded_guide_title");

    targetPEl.classList.add("expanded_guide_title");
    element.classList.add("expanded_guide");
    element.children[1].classList.add("expanded_guide_details");
  });

  inputCheck.addEventListener("change", (e) => {
    if (e.target.checked) {
      const clickEvent = new Event("click");
      targetPEl.dispatchEvent(clickEvent);
    }
  });
});
