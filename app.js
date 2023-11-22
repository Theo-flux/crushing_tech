const bodyEl = document.body
const acctEl = document.getElementById('acctEl');
const dropdownEl = document.getElementById('dropdownEl');
const toastEl = document.getElementById('toastEl')
const toastMobileCloseEl = document.getElementById('toastMobileCloseEl');
const toastDesktopCloseEl = document.getElementById('toastDesktopCloseEl');

const handleCloseToast = () => {
    toastEl.style.display = 'none'
}


acctEl.addEventListener('click', () => {
    const dropdownDisplay = window.getComputedStyle(dropdownEl).display

    if (dropdownDisplay === 'none') {
        dropdownEl.style.display = 'flex'
    }
    else {
        dropdownEl.style.display = 'none'
    }
});


toastMobileCloseEl.addEventListener('click', handleCloseToast)
toastDesktopCloseEl.addEventListener('click', handleCloseToast)
