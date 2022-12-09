let timeout = document.getElementById('timeout');
let timeout_div = document.getElementById('timeout-div');
let div = document.createElement('div');
let inter_start = document.getElementById('interval-start');
let inter_stop = document.getElementById('interval-stop');
let internal_div = document.getElementById('interval-div');



timeout.addEventListener('click', () => {
    setTimeout(() => {
        div.style.textTransform = "uppercase";
        timeout_div.appendChild(div);
        div.innerHTML = "Mon timeout vient de créer ce div 2 secondes après le click sur le bouton !";
    }, 2000)
})

inter_start.addEventListener('click', () => {
    let timeout = setTimeout(() => {
        internal_div.innerHTML = inter_start.toString()
    }, 60000)
    inter_start++
    inter_stop.addEventListener('click', () => {
        clearTimeout(timeout);
    })
})


