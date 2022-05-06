const inputEl = document.getElementById("btn-submit");
const colorEl = document.getElementById("ipt-color");
const modeEl = document.getElementById("ipt-mode");
const spaceEls = document.getElementsByClassName("space");
const codeEls = document.getElementsByClassName("code");

inputEl.addEventListener("click", function(event) {
    event.preventDefault();
    renderColors(colorEl.value.substr(1), modeEl.value);
})

function renderColors(color, mode) {
    const option = {
        method: "GET",
        header: {
            "Content-type": "application/json"
        }
    }
    fetch("https://www.thecolorapi.com/scheme?hex="+color+"&mode="+mode+"&count=5", option)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                spaceEls[i].style.background = data.colors[i].hex.value;
                codeEls[i].textContent = data.colors[i].hex.value;
            }
        })
}