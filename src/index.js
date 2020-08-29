console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

window.addEventListener("load", () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => console.log(json))


})

//     - on page load
//         - fetch the images using the url above ⬆️
// - parse the response as `JSON`
//     - add image elements to the DOM **for each **🤔 image in the array
 const ul = document.getElementById("breed-dropdown")
    ul.innerHTML = "wtf"
//  }