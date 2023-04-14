const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        "api_key": "6430a02428ee299b7eaaf25060873b5d"
    },
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

async function getTreadingMoviesPreview(){
    const { data } = await api("/trending/movie/day");
    const movies = data.results;

    movies.forEach(movie => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute(
            "src",
            "https://image.tmdb.org/t/p/w500" + movie.poster_path
        );
        
        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}

async function getCategoriesPreview(){
    const { data } = await api("/genre/movie/list");
    const categories = data.genres;

    categories.forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", "id" + category.id);
        categoryTitle.innerText = category.name;

        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
    });
}