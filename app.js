const rootEl = document.getElementById("rootEl");
const acctEl = document.getElementById("acctEl");
const alertEl = document.getElementById("alertEl");
const dropdownEl = document.getElementById("dropdownEl");
const alertDropdownEl = document.getElementById("alertDropdownEl");
const dropdownElMenuItems = dropdownEl.querySelectorAll("[role='menuitem']");
const alertElMenuItems = alertDropdownEl.querySelectorAll("[role='menuitem']");
const toastEl = document.getElementById("toastEl");
const toastMobileCloseEl = document.getElementById("toastMobileCloseEl");
const toastDesktopCloseEl = document.getElementById("toastDesktopCloseEl");
const setupGuideTogglerEl = document.getElementById("setupGuideTogglerEl");
const setupGuideBottomEl = document.getElementById("setupGuideBottomEl");
const setupGuideArrowEl = document.getElementById("setupGuideArrowEl");
const personalizedGuideEls = document.querySelectorAll(".personalized_guides");
const progressCountEl = document.getElementById("progressCountEl");
const inputCheckEls = document.querySelectorAll(".input_check");
const progressEl = document.getElementById("progressEl");
const liveElAnnouncer = document.getElementById("liveElAnnouncer");
const setupWrapperEl = document.querySelector("[role='contentinfo']");

console.log(dropdownElMenuItems);

// function to get number of completed setup guides
const getCompletedGuides = () => {
  let completedGuides = 0;
  inputCheckEls.forEach((element) => {
    if (element.checked) completedGuides = completedGuides + 1;
  });

  return completedGuides;
};

// function to compute the progress of setup guides
const computeProgress = () => {
  progressCountEl.innerText = `${getCompletedGuides()}/${
    inputCheckEls.length
  } completed`;

  const percentage = Math.round(
    (getCompletedGuides() / inputCheckEls.length) * 100,
  );
  progressEl.setAttribute("value", `${percentage}`);
  progressEl.innerText = `${percentage}%`;
};

// function to close trial plan toast
const handleCloseToast = () => {
  toastEl.style.display = "none";
  liveElAnnouncer.textContent = "Shopify trial plan toast closed";
};

// event listener for account dropdown
acctEl.addEventListener("click", (e) => {
  e.stopPropagation();
  const dropdownDisplay = window.getComputedStyle(dropdownEl).display;
  alertDropdownEl.style.display = "none";

  if (dropdownDisplay === "none") {
    dropdownEl.style.display = "flex";
    dropdownElMenuItems.item(0).focus();
  } else {
    dropdownEl.style.display = "none";
    acctEl.focus();
  }
});

// handlehandleDropdownMenuItemKeypress function
function handleDropdownMenuItemKeypress(event, menuItemIndex) {
  const key = event.key;
  const isLast = dropdownElMenuItems.length - 1 === menuItemIndex;
  const isFirst = menuItemIndex === 0;
  const nextMenuItem = dropdownElMenuItems.item(menuItemIndex + 1);
  const prevMenuItem = dropdownElMenuItems.item(menuItemIndex - 1);

  if (key === "ArrowDown" || key === "ArrowLeft") {
    if (isLast) {
      dropdownElMenuItems.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  } else if (key === "ArrowUp" || key === "ArrowRight") {
    if (isFirst) {
      dropdownElMenuItems.item(dropdownElMenuItems.length - 1).focus();
      return;
    }
    prevMenuItem.focus();
  }
}

// handlehandleDropdownMenuItemKeypress function
function handleAlertMenuItemKeypress(event, menuItemIndex) {
  const key = event.key;
  const isLast = alertElMenuItems.length - 1 === menuItemIndex;
  const isFirst = menuItemIndex === 0;
  const nextMenuItem = alertElMenuItems.item(menuItemIndex + 1);
  const prevMenuItem = alertElMenuItems.item(menuItemIndex - 1);

  if (key === "ArrowDown" || key === "ArrowLeft") {
    if (isLast) {
      alertElMenuItems.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  } else if (key === "ArrowUp" || key === "ArrowRight") {
    if (isFirst) {
      alertElMenuItems.item(alertElMenuItems.length - 1).focus();
      return;
    }
    prevMenuItem.focus();
  }
}

// event listeners for acct popup
dropdownEl.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    dropdownEl.style.display = "none";
    acctEl.focus();
  }
});

dropdownElMenuItems.forEach((dropdownMenuItem, idx) => {
  dropdownMenuItem.addEventListener("keyup", function (event) {
    handleDropdownMenuItemKeypress(event, idx);
  });
});

// event listener for notification/alert dropdown
alertEl.addEventListener("click", (e) => {
  e.stopPropagation();
  const alertDropdownDisplay = window.getComputedStyle(alertDropdownEl).display;
  dropdownEl.style.display = "none";

  if (alertDropdownDisplay === "none") {
    alertDropdownEl.style.display = "flex";
    alertElMenuItems.item(0).focus();
  } else {
    alertDropdownEl.style.display = "none";
    alertEl.focus();
  }
});

// event listeners for alert popup
alertDropdownEl.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    alertDropdownEl.style.display = "none";
    alertEl.focus();
  }
});

alertElMenuItems.forEach((alertElMenuItem, idx) => {
  alertElMenuItem.addEventListener("keyup", function (event) {
    handleAlertMenuItemKeypress(event, idx);
  });
});

// event listeners for both mobile and desktop trial plan close element
toastMobileCloseEl.addEventListener("click", handleCloseToast);
toastDesktopCloseEl.addEventListener("click", handleCloseToast);

// event listener to listen for ouside clicks for dropdowns
document.addEventListener("click", (e) => {
  if (window.getComputedStyle(dropdownEl).display !== "none") {
    dropdownEl.style.display = "none";
  }

  if (window.getComputedStyle(alertDropdownEl).display !== "none") {
    alertDropdownEl.style.display = "none";
  }
});

// event listener to handle the toggling of setup guide
setupGuideTogglerEl.addEventListener("click", () => {
  const setupGuideBtmHeight =
    window.getComputedStyle(setupGuideBottomEl).height;

  console.log(setupGuideBottomEl.clientHeight);

  if (setupGuideBtmHeight === "350px") {
    setupGuideBottomEl.style.height = "0px";
    setupGuideBottomEl.style.visibility = "hidden";
    setupGuideBottomEl.style.opacity = "0";
    setupGuideArrowEl.style.rotate = "-180deg";
    liveElAnnouncer.textContent = "setup guides collapsed";
    setupWrapperEl.style.gap = "0px";
  } else {
    setupGuideBottomEl.style.height = "350px";
    setupGuideBottomEl.style.visibility = "visible";
    setupGuideBottomEl.style.opacity = "1";
    setupGuideArrowEl.style.rotate = "0deg";
    liveElAnnouncer.textContent = "setup guides expanded";
    setupWrapperEl.style.gap = "16px";
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
    computeProgress();
  });
});

computeProgress();
