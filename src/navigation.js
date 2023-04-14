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
    getTreadingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage(){
    console.log("Estamos en categorias");
}

function movieDetailsPage(){
    console.log("Estamos en peliculas");
}

function trendsPage(){
    console.log("Estamos en trends");
}

function searchPage(){
    console.log("Estamos en busquedas");
}