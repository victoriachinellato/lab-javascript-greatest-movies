const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },

  {
    title: 'Singin" in the Rain',
    year: 1952,
    director: "Stanley Donen",
    duration: "1h 43min",
    genre: ["Comedy", "Musical", "Romance"],
    score: 8.3,
  },
  {
    title: "Toy Story 3",
    year: 2010,
    director: "Lee Unkrich",
    duration: "1h 43min",
    genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    score: 8.3,
  },
  {
    title: "All About Eve",
    year: 1950,
    director: "Joseph L. Mankiewicz",
    duration: "2h 18min",
    genre: ["Drama"],
    score: 8.3,
  },
  {
    title: "Yôjinbô",
    year: 1961,
    director: "Akira Kurosawa",
    duration: "1h 50min",
    genre: ["Action", "Drama", "Thriller"],
    score: 8.3,
  },
  {
    title: "Batman Begins 3",
    year: 2005,
    director: "Çagan Irmak",
    duration: "1h 48min",
    genre: ["Drama"],
    score: 8.5,
  },
  {
    title: "Up",
    year: 2009,
    director: "Batman Begins 2",
    duration: "1h 36min",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    score: 8.3,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Adventure", "Thriller"],
    score: 8.3,
  },
  {
    title: "Batman Begins 2",
    year: 2005,
    director: "Billy Wilder",
    duration: "2h 1min",
    genre: ["Comedy", "Romance"],
    score: 8.3,
  },
];

function orderByYear(moviesArray) {
  let duplicateArray = moviesArray.slice();

  function compare(a, b) {
    if (a.year === b.year) {
      duplicateArray.sort((a, b)=> {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        if (a.title === b.title) return 0;
      })
      }
    return a.year - b.year;
    }
  return duplicateArray.sort(compare);
}

console.log(orderByYear(movies))


