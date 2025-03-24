function checkAge(gender) {
    let Movie_recomendedText = document.getElementById("movie_recommended");

    let User_age = document.getElementById("age");
    let User_currentAge = parseInt(User_age.value);

    switch (gender) {
        case "drama":
            if (User_currentAge < 13) {
                Movie_recomendedText.textContent = "Casablanca"
            } else if (User_currentAge > 13 || User_currentAge < 15) {
                Movie_recomendedText.textContent = "The Shawshank Redemption"
            } if (User_currentAge >= 16){
                Movie_recomendedText.textContent = "Taxi Driver"
            }
            break;
        case "comedy":
            if (User_currentAge < 13) {
                Movie_recomendedText.textContent = "Back to the Future"
            } else if (User_currentAge > 13 || User_currentAge < 15) {
                Movie_recomendedText.textContent = "The Truman Show"
            } if (User_currentAge >= 16){
                Movie_recomendedText.textContent = "The Wolf of Wall Street"
            }
            break;
        case "musical":
            if (User_currentAge < 13) {
                Movie_recomendedText.textContent = "La La Land"
            } else if (User_currentAge > 13 || User_currentAge < 15) {
                Movie_recomendedText.textContent = "Les Misérables"
            } if (User_currentAge >= 16){
                Movie_recomendedText.textContent = "The Rocky Horror Picture  Show"
            }
            break;
        case "crime":
            if (User_currentAge < 13) {
                Movie_recomendedText.textContent = "No hay opciones para esta edad"
            } else if (User_currentAge > 13 || User_currentAge < 15) {
                Movie_recomendedText.textContent = "El Secreto de sus Ojos"
            } if (User_currentAge >= 16){
                Movie_recomendedText.textContent = "The Godfather"
            }
            break;
    }
}
