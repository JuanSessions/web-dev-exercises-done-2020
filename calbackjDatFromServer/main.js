// function example 
function doHomework(subject) {
    alert(`Starting my ${subject} homework.`);
}

doHomework('math');
// Alerts: Starting my math homework.

// callback example 1
function doHomework1(subject, callback) {
    alert(`Doing my ${subject} homework.`);
    callback();
}

doHomework1('math', function () {
    alert('Finished my homework');
});


// callback example 2
function doHomework3(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}

// doHomework3("test", ""); callback parameter becomes a function 
// through alertFinished in the next call as second parameter

function alertFinished() {
    alert('Finished my homework');
}

doHomework3('geography', alertFinished);


//callbacks
//make coffee
function makecoffee(callback) {
    setTimeout(() => {
        let water = "boiled";
        //once water boiled we are calling next function
        callback(water, callback2)
    }, 2000);
}

function callback(water, callback2) {
    if (water === "boiled") {
        let coffee = "added"
        //once coffee added we are calling next function
        callback2(coffee, callback3)
    }
}

function callback2(coffee, callback3) {
    if (coffee === "added") {
        let milk = "added"
        //once milk added we are calling next function
        callback3(milk)
    }
}

function callback3(milk) {
    if (milk === "added") {
        console.log("your Coffee is ready now.ENJOY")
    }
}
makecoffee(callback);