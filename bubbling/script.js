let form = document.querySelector("form")

//create task array to store all tasks.
let tasks = [];

//target ul and append li into it. 
let ul = document.querySelector("ul")

//getting data from the local storage
let dataFromLS = localStorage.getItem("items")
if (dataFromLS) {
    tasks = JSON.parse(dataFromLS)
}


//onload event create store tasks lis for you
window.addEventListener("load", (e) => {
    // loop through tasks array and create li and append in ul.
    tasks.forEach(task => {

        let li = document.createElement("li");
        li.innerHTML = task;

        //creating span into li
        let span = document.createElement("span")
        span.innerHTML = "X"

        //append span into li
        li.appendChild(span)



        //append li into ul
        ul.appendChild(li)
    })
})

//add event listener on form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //target input element and get value.
    let inputValue = document.getElementById("task");

    //trim the space between words and leave one space between
    if (inputValue.value.trim() !== "") {
        //add this value to tasks array and trim spaces
        tasks.push(inputValue.value.trim())
    }

    //storing our task array into localStorage
    localStorage.setItem("items", JSON.stringify(tasks))

    //clear input value
    inputValue.value = ""

    //clear ul
    ul.innerHTML = ""

    // loop through tasks array and create li and append in ul.
    tasks.forEach(task => {

        let li = document.createElement("li");
        li.innerHTML = task;

        //creating span into li
        let span = document.createElement("span")
        span.innerHTML = "X"

        //append span into li
        li.appendChild(span)



        //append li into ul
        ul.appendChild(li)
    })

})

ul.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "green";
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()

        // or: let value = e.target.parentElement.innerText.slice(0, -1)

        // remove the text (value) for the next task
        let value = e.target.parentElement.firstChild.wholeText;
        let index = tasks.indexOf(value)

        //delete the task from array using index
        tasks.splice(index, 1) //this 1 is the number of items removed 
        localStorage.setItem("items", JSON.stringify(tasks))
    }
})