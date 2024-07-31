let n = 0
let progressBar = document.getElementById("box")

addEventListener("keydown", (e) => {
    if (e.keyCode === 107) {
        n>=360 ? 360 : n+=5
    } else if (e.keyCode === 109) {
        n<=0? 0 : n-=5
    }
    progressBar.style.background = `conic-gradient(white ${n}deg,black 0deg)`
    progressBar.dataset.content = `${Math.floor(n / 3.6)}%`
})