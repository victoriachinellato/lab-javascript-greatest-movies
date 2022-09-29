// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirector = moviesArray.map((movie) => movie.director);
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenSpilberg = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  let dramaSS = stevenSpilberg.filter((movie) => movie.genre.includes("Drama"));
  return dramaSS.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let averageScore = moviesArray.reduce((a, b) => {
    if (b.score) return a + b.score;
    else return a;
  }, 0);

  let average = averageScore / moviesArray.length;

  console.log(averageScore);

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let duplicateArray = moviesArray.slice();

  function compare(a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (b.title > a.title) return -1;
      if (a.title === b.title) return 0;
    }

    return a.year - b.year;
  }
  return duplicateArray.sort(compare);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let dupArray = moviesArray.slice();

  dupArray.sort((a, b) => {
    if (a.title < b.title) return -1;
    return 1;
  });

  let finalArray = [];
  if (dupArray.length > 20) {
    for (let i = 0; i < 20; i++) {
      finalArray.push(dupArray[i].title);
    }
    return finalArray;
  }
  return dupArray.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
