// document.getElementById("count-el").innerText=5

let count = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
   
    count += 1
    countEl.innerText = count
    console.log(count)
}

 function save()
 {
    let entries = count + " - "
    saveEl.textContent += entries
    console.log(count)
    backToZero()
    
 }

 function backToZero(){
    count = 0
    countEl.innerText = count
 }