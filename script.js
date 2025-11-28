
let music1 = new Audio("./1.mp3")
let start1 = document.getElementById("start1")
let stop1 = document.getElementById("stop1")

start1.addEventListener("click", function () {
    music1.play()
})
stop1.addEventListener("click", function () {
    music1.pause()
})



let music2 = new Audio("./2.mp3")
let start2 = document.getElementById("start2")
let stop2 = document.getElementById("stop2")

start2.addEventListener("click", function () {
    music2.play()
})
stop2.addEventListener("click", function () {
    music2.pause()
})



let music3 = new Audio("./3.mp3")
let start3 = document.getElementById("start3")
let stop3 = document.getElementById("stop3")

start3.addEventListener("click", function () {
    music3.play()
})
stop3.addEventListener("click", function () {
    music3.pause()
})



