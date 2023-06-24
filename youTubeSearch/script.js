const input = document.querySelector(".inputSearch");
const parent = document.querySelector(".list__wrapper");
let controller;
let signal;

function debounce ( func, delay){
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {func(...args)}, delay)
    }

}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8cf8654a9mshedea30dee41a7a5p1d6b10jsn56357ea63f37',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	},
};
const fetchData = async (e) => {
    const url = `https://youtube138.p.rapidapi.com/search/?q=${e.target.value}&hl=en&gl=US`;

    controller = new AbortController();
    signal = controller.signal;

    try {
        const response = await fetch(url, { ...options, signal });
        const result = await response.json();
        controller = undefined;
        signal = undefined;
        parent.innerHTML = "";
        result.contents.forEach((video) => {
            const el = document.createElement("li");
            el.classList.add("list__item");
            el.innerHTML = `
            <div class="photoVideo">
                <img class="vidThumb" src=${video.video.thumbnails[0].url} alt="videoImg">
            </div>
            <div class="mainDescr">
                <div class="imgWrapper">
                    <img class="thumbnail" src=${video.video.author.avatar[0].url} alt="img">
                </div>
                <div class="contentWrapper">
                    <h4 class="header">${video.video.title}</h4>
                    <p class="author">${video.video.author.title}</p>
                    <div class="views">
                        <span class="viewsCoutn">${video.video.stats.views} views</span>
                        <span class="whenPosted">${video.video.publishedTimeText}</span>
                    </div>
                </div>
            </div>
        `;
            parent.append(el);
        });
    } catch (e) {
        console.log(e);
    }
};

const debounced = debounce(fetchData, 1000);
input.addEventListener('input',(e) => {if(controller)controller.abort(); debounced(e)});



