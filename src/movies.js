const movies = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
    return movies.map( movie => movie.director );
}

// const allDirectors = movies.map( (movie) => movie.director);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaMoviesBySpielberg = movies.filter( function (movie) {
        return (( movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) ? true : false );
        
        /* if (movie.director === 'Steven Spielberg' && movie.genre.includes('drama')) {
            return true;
        } else {
            return false;
        } */
    });
    return dramaMoviesBySpielberg.length;
};

// console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let sumOfRates = 0;
    const arrayOfRates = movies.reduce(function(acc,value) {
        sumOfRates += value.rate;
        acc++;
        return acc;
    }, 0);
    return (Math.floor((sumOfRates / arrayOfRates)*100))/100;
};
// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter( movie => (movie.genre.includes('Drama'))? true:false);
    const sumOfAllRates = dramaMovies.reduce( (acc, movie) => ( acc + movie.rate), 0);

    return Math.floor((sumOfAllRates/dramaMovies.length)*100)/100;
};

// console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const orderedMovies = movies.sort ( (movie1, movie2) => {
        if (movie1.year === movie2.year) {
            return (movie1.title < movie2.title ? -1 : 1);
        } else if ( movie1.year < movie2.year) {
            return -1
        } else {
            return 1
        }
    })
    return orderedMovies;
};

// console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    // Sort movies by alphabetic order
    const orderedAlphabetically = movies.sort( (movie1, movie2) => (movie1.title > movie2.title ? 1 : -1) );
    // Make an array with movie titles
    const arrayOfTitle = orderedAlphabetically.map( movie => movie.title );
    //Return only the first 20 [0->19] items of the movie titles array.
    return arrayOfTitle.slice(0,20);
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    const newTimeFormat = movies.map(movie => {
        movie.duration = movie.duration[0]*60+parseInt(movie.duration.slice(3));
        return movie;
    });
    return newTimeFormat; 
};

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    
    //const orderedByYear = movies.sort((movie1,movie2) => (movie1.rate - movie2.rate));

    // Aux Var save info about year and average rate so far
    let newList = [];
    
    /* Type of saved information {
        'year': ;
        'average': 0;
        'count': 0;
    }; */
    const averageRatePerYEar = movies.reduce( (acc, movie) => {
        /* if ( !acc.includes(movie.year) ) {
            acc.push(movie.year);
        }
        return acc; */




        acc;
        return acc;
    }); 



    return `The best year was ${} with an average rate of ${}`
};

