const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        "api_key": "6430a02428ee299b7eaaf25060873b5d"
    },
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

//Llamadas a la api

async function getTreadingMoviesPreview(){
    const { data } = await api("/trending/movie/day");
    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList);
}

async function getCategoriesPreview(){
    const { data } = await api("/genre/movie/list");
    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id){
    const { data } = await api("/discover/movie", {
        params: {
            with_genres: id
        }
    });
    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMoviesBySearch(query){
    const { data } = await api("/search/movie", {
        params: {
            query,
        }
    });
    console.log(data);
    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getTreadingMovies(){
    const { data } = await api("/trending/movie/day");
    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMovieById(id){
    const { data: movie } = await api("/movie/" + id);

    const movieImgURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    headerSection.style.background = `url(${movieImgURL})`;

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.innerText = movie.vote_average;

    createCategories(movie.genres, movieDetailCategoriesList);
    getRelatedMoviesById(id);
}

async function getRelatedMoviesById(id){
    const { data } = await api(`/movie/${id}/recommendations`);
    const relatedMovies = data.results;

    createMovies(relatedMovies, relatedMoviesContainer);
}

//Utils

function createMovies(movies, container){
    container.innerHTML = "";
    movies.forEach(movie => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.addEventListener("click", () => {
            location.hash = "#movie=" + movie.id;
        });

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute(
            "src",
            "https://image.tmdb.org/t/p/w500" + movie.poster_path
        );
        
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}

function createCategories(categories, container){
    container.innerHTML = "";

    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", "id" + category.id);
        categoryTitle.innerText = category.name;
        categoryTitle.addEventListener("click", () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });

        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}