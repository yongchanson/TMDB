const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, release_date, id } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        
            <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}" onclick="location.href = '/${movie.id}'">
          
            <div class="movie-info">
                <h3>${title}</h3>
                <span>평점 : <span class="${getColor(vote_average)}">${vote_average}</span> / 10</span>
                <br><span> 개봉일자 : ${release_date} </span>
            </div>
        `

        main.appendChild(movieEl);

        
    })
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "blue"
    }else{
        return 'red'
    }
}