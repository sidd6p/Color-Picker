const inputEl = document.getElementById("btn-submit");
const colorEl = document.getElementById("ipt-color");
const modeEl = document.getElementById("ipt-mode");

inputEl.addEventListener("click", function(event) {
    event.preventDefault();
    const option = {
        method: "GET",
        header: {
            "Content-type": "application/json"
        }
    }
    fetch("https://www.thecolorapi.com/scheme?hex="+colorEl.value+"&mode="+modeEl.value+"&count=5", option)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})  