let apiKey = `v_b8B438g-Kyrn6EOyJ14KuvIeV01zQA8bxUL-oZIws`;
let imageView = document.querySelector(".image-view");
let input = document.getElementById("input");
let searchForm = document.getElementById("search-form");
let moreImage = document.getElementById("more-button");

let page = 1;

async function previewImage() {
    keyBoard = input.value;

    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyBoard}&client_id=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    if (page === 1) {
        imageView.innerHTML = "";
    }
    let results = data.results;

    results.map((result) => {

        let div = document.createElement("div");
        div.classList.add("images");
        let image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        image.title = result.alt_description;
        imageView.appendChild(div)
        div.appendChild(image)
    })
    moreImage.style.display = "block"
}

searchForm.addEventListener("submit", (str) => {
    str.preventDefault()
    page = 1;
    previewImage()
})

moreImage.addEventListener("click", (str) => {
    str.preventDefault()
    page++
    previewImage()
})