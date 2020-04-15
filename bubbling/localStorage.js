console.dir(localStorage);

let data = ["juan", 23, "date"]

let json = JSON.stringify(data)

//adding data to local storage
localStorage.setItem("items", json)

//get data from local storage
let getDatafromLS = localStorage.getItem("items")

console.log(getDatafromLS)

//parsing data from received localStorage
let convertedData = JSON.parse(getDatafromLS)

console.log(convertedData)

//removing data from localStorage

// localStorage.removeItem("items")