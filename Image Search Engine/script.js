// Access key: 1ZxW8CBAbqeS8R_emGL7XA3FHAfuB7QuZGN64x4UaAg
const searchBtn = document.getElementById('search-btn');
const form = document.getElementById('search-form');
const showMoreBtn = document.getElementById('show-more-btn');
const searchInput = document.getElementById('search-input');
const imgShow = document.getElementById('img-show');

let keyword = '';
let pgNo = 1;
let accessKey = '1ZxW8CBAbqeS8R_emGL7XA3FHAfuB7QuZGN64x4UaAg';

async function searchImage() {
    keyword = searchInput.value;
    let url = `https://api.unsplash.com/search/photos?page=${pgNo}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    
    if(pgNo == 1){
        imgShow.innerHTML = '';
    }

    const results = data.results;
    //as results is in json format, we use maps
    results.map((result)=>{
        let imgTag = document.createElement('img');
        imgTag.src = result.urls.small;
        imgShow.appendChild(imgTag);
    })
    showMoreBtn.style.display = 'block';
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    pgNo = 1;
    searchImage();
})

showMoreBtn.addEventListener('click', ()=>{
    pgNo = pgNo + 1;
    searchImage();
})