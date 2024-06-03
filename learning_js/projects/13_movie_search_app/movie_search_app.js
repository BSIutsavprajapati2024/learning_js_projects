// const APIURL = "https://cat-fact.herokuapp.com/facts"
// const APIURL = "https://potterapi-fedeperin.vercel.app/en/books"
// const APIURL = "https://potterapi-fedeperin.vercel.app/en/characters"
// const APIURL = "https://potterapi-fedeperin.vercel.app/en/houses"
// const APIURL = "https://potterapi-fedeperin.vercel.app/en/spells"
const APIURL = "https://potterapi-fedeperin.vercel.app/en/books"

const movieBox = document.querySelector("#movie-box")

//init call
const getMovies = async(api,text="") => {
    const response = await fetch(api)   
    if(response.status !== 200){
        console.log("not found")
    } else{
        let data = await response.json()
        data = data.filter(x => x['title'].toLowerCase().includes(text.toLocaleLowerCase()));
        showMovies(data)
    }
}
getMovies(APIURL,text="")

const showMovies = (data) => {
    movieBox.innerHTML = ""
    data.forEach((item) => {
        const box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = `
        <img src="${item.cover}" alt="" />
        <div class="overlay">
            <div class="title"> 
                <h2>${item.title}</h2>
            </div>
            <h3>Overview:</h3>
            <p> 
                ${item.description}
                <br/>
                Released Date : ${item.releaseDate}
            </p>
        </div>`
        movieBox.append(box)
    }  
) 
}

document.querySelector("#search").addEventListener("keyup", function(e){
    console.log(e.target.value);
    if(e.target.value != ""){
        getMovies(APIURL,e.target.value)
    } else{
        getMovies(APIURL)
    }
})

document.querySelector("#search").addEventListener('search', function(){
    console.log("clicked");
    document.querySelector("#search").value = ""
    getMovies(APIURL)
})