const formatString = (a, b) => {
    return (a == b - 1) ? '' : ', ';
}


detailMovies(moviedetail);

function detailMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        setupMovieInfo(data);
    })
}

const setupMovieInfo = (data) => {
    const movieName = document.querySelector('.movie-name');
    const genres = document.querySelector('.genres');
    const des = document.querySelector('.des');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-info');

    title.innerHTML = movieName.innerHTML = data.title; 
    for(let i = 0; i < data.genres.length; i++){
    genres.innerHTML += data.genres[i].name + formatString(i, data.genres.length);
    }
    des.innerHTML = data.overview

    backdrop.style.backgroundImage = `url(${original_img_url}${data.backdrop_path})`;
}


// fetch(`${movie_detail_http}${movie_id}/credits?` + API_KEY)
// .then(res => res.json())
// .then(data => {
//     const cast = document.querySelector('.starring');
//     for(let i = 0; i < data.cast.length; i++){
//         cast.innerHTML += data.cast[i].name + formatString(i, data.cast.length);
//     }
// })    

fetch(`${movie_detail_http}${movie_id}/credits?` + API_KEY)
.then(res => res.json())
.then(data => {
    const actor = document.querySelector('.actor');

    for(let i = 0; i < data.cast.length; i++){
        actor.innerHTML +=
        `<div class="actors"> <img class="actorimg" src="${IMG_URL}${data.cast[i].profile_path}">
        <h4>배우이름 : ${data.cast[i].name}</h4> <h4>배역이름 : ${data.cast[i].character}</h4> </div>`;
    }
})    

