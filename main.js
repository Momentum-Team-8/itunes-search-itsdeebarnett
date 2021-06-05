//Build <input> so the user can type in the name of band or artist
//Make sure the "submit" button when pressed make a request to the API
//The API should return with a response   
//Use the results to display listing of songs related to search material
//Song preview <audio> should be used in the .js

//Use const to set the variables for the submit button, search, and output.


const button = document.querySelector("#submit")
const musicInput = document.querySelector('#search')
const output = document.querySelector('#output')

button.addEventListener('click', event => {
    getMusic()
})

function getMusic(){
    let url='https://proxy-itunes-api.glitch.me/search?term=' + musicInput.value + '&limit=30&media=music&entity=song'
    // let audioElement = new Audio('previewUrl')
//
    fetch(url)
    .then(data => data.json() )
    .then( json => {
        console.log(json)
    for(let i=0; i<json.results.length; i ++) {
        let name = json.results[i].artistName
        let cover = json.results[i].artworkUrl100
        let albumTitle = json.results[i].collectionName
        let audioPreview = json.results[i].previewUrl
        let track = json.results[i].trackCensoredName


    let musicHaul = `
    <div class ="f3 fw4 pa3 mv0" "song">
       <img class= "db ba b--black-10" src="${cover}" value = "${albumTitle}">
       <br>
     <div class = "Artist">   
        <h3> ${name}</h3>
    <div class = "Album"
        <h3> ${albumTitle}</h3>
    <div class = "Track"
        <h3> ${track}</h3>
    <div class = "Preview">
        <audio  controls = "controls"> 
        <source src="${audioPreview}"/>
        </audio>
    </div>
    `
        output.insertAdjacentHTML("beforeBegin", musicHaul)
    }
})
output.addEventListener("click", function (click) {
    let cover = document.querySelectorAll("cover")
    if (click.target == click.target.nodeName == "cover")
    audioPreview.src = click.target.getAttribute("value")
    
})

}

