// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*{
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": ["Crime","Drama"],
    "score": 9.3
  }
*/
function getAllDirectors(moviesArray) {
   return moviesArray.map(currentMovie => {
    currentMovie.director
   })

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(currentMovie => 
        currentMovie.director === 'Steven Spielberg' && currentMovie.genre.includes('Drama')
    ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
return 0
    }
const scoreSum = (
    moviesArray.reduce((accumulator, element)=> {
        if(typeof element.score === 'number') {
            return (accumulator + element.score)
        } else {
            return accumulator
        }
}, 0) / moviesArray.length)
return parseFloat(scoreSum.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 const dramaMovies = moviesArray.filter(currentMovie => currentMovie.genre.includes('Drama'))
 if (dramaMovies.length === 0) {
    return 0
 }
 const dramaAvg = (
    dramaMovies.reduce((accumulator, element) =>{
        if(typeof element.score === 'number') {
            return (accumulator + element.score)
        } else{
            return accumulator
        }
    }, 0) / dramaMovies.length)
    return parseFloat(dramaAvg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.toSorted((a, b) => { 
       const compare = a.year - b.year
       if(compare === 0) {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    } 
        return compare
})  
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   return moviesArray.map(currentMovie => currentMovie.title)
   .toSorted((a, b) => 
a.toLowerCase().localeCompare(b.toLowerCase())).splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
