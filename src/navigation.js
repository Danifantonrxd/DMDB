searchFormBtn.addEventListener("click", () => {
    location.hash = "#search=";
});

trendingBtn.addEventListener("click", () => {
    location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
    location.hash = "#home";
});

window.addEventListener("DOMContentLoaded", navigator, false)
window.addEventListener("hashchange", navigator, false);

function navigator(){
    if(location.hash.startsWith("#trends")){
        trendsPage();
    } 
    else if (location.hash.startsWith("#search=")) {
        searchPage();
    } 
    else if (location.hash.startsWith("#movie=")) {
        movieDetailsPage();
    }
    else if (location.hash.startsWith("#category=")) {
        categoriesPage();
    }
    else {
        homePage();    
    }
}

function homePage(){
    console.log("Estamos en Home :)");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.add("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.remove("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    genericSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

    getTreadingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage(){
    console.log("Estamos en categorias");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
}

function movieDetailsPage(){
    console.log("Estamos en peliculas");

    headerSection.classList.add("header-container--long");
    //headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.add("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.add("inactive");
    movieDetailSection.classList.remove("inactive");
}

function searchPage(){
    console.log("Estamos en busquedas");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
}

function trendsPage(){
    console.log("Estamos en trends");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");
}