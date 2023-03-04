//document.getElementById("count").innerText = 5;




//initialize the count as 0
//listen for clicks on increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let count = 0;
let countEl = document.getElementById("count-el");


function increment(){
    count += 1;
    countEl.textContent = count;
}

function decrement(){
    if(count <= 0){
        return;
    }
    count -= 1;
    countEl.textContent = count;
}
function save(){
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += count + " - ";
    console.log(saveEl);
    
    //reset count on save
    count = 0;
    countEl.textContent = count;
}