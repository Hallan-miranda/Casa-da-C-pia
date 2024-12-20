const currentYear = document.querySelector("#currentyear")

const today = new Date()

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;