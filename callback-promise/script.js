fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        let json = data.json() //converting data/parsing data
        return json;
    })

    .then(json => {
        console.log(json)
        let user = json[Math.floor(Math.random() * 10)].username
        //get random username from json array
        return user;
    })

    .then(user => {
        //fetch image from server
        let img = "https://joeschmoe.io/api/v1/${user}"
        return {
            image: img,
            title: user
        }
    })
    .then(object => {
        //getting reference of img tag in the html file
        let image = document.querySelector("img")
        //getting reference of div tag with id title in html
        let title = document.getElementById("title")
        image.src = object.image;
        title.innerHTML = object.title
    })