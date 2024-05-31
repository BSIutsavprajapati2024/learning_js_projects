const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main")
const searchBox = document.querySelector("#search")

const getUser = async(username) => {
    const response = await fetch(APIURL + username)
    if(response.status !== 200){
        main.innerHTML = `<h2 style='background-color: #04AA6D;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 12px;'>No data found for the given user</h2>`
        return;
    }
    const data = await response.json()

    const card = `
    <div class="card">
        <div>
            <img class="avatar" src="${data.avatar_url} alt="Florin Pop">
        </div>
    <div class="user-info">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>

      <ul class="info">
        <li>${data.followers}<strong>Followers </strong></li>
        <li>${data.following}<strong>Following</strong></li>
        <li>${data.public_repos}<strong>Repository</strong></li>
      </ul>

      <div id="repos">
      </div>
    </div>
    </div>
    `
    main.innerHTML = card
    getRepos(username)
}

// getUser("BSIutsavprajapati2024")
getUser("Festival-3000")

const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json()

    data.forEach((item) => {
        const elements = document.createElement("a")
        elements.classList.add("repo")
        elements.href = item.html_url 
        elements.innerText = item.name
        elements.target = "_blank"
        repos.appendChild(elements)
    });
}

const formSubmit = () => {
    if(searchBox.value != ""){
        getUser(searchBox.value)
        searchBox.value = ""
    }
    return false;
}

searchBox.addEventListener('focusout', function(){
    formSubmit()
})