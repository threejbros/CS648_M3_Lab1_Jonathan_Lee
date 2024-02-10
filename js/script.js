function printList (list) {
    "use strict";
    var output = ""; 
    for (var i = 0; i < list.length; ++i) {
        if (typeof list[i] !== 'undefined') 
            output += "\'" + list[i] + "\'";
        else   
            output += list[i];
        if (i < list.length - 1)
            output += "\n";
    }
    return output;
}

function printOneLine (list) {
    "use strict";
    var output = ""; 
    for (var i = 0; i < list.length; ++i) {
        output += list[i];
        if (i < list.length - 1)
            output += ", ";
    }
    return output;
}

// FUNCTION TO CALL WHEN PAGE LOADS
function init() {
    "use strict";
    var movies;

    // ==============================STEP 1==============================
     var favoriteMoviesList = [
        'Top Gun: Maverick',
        'Avengers: Endgame',
        'Spider-Man: Into the Spider-Verse',
        'Aladdin',
        'Mary Poppins'
    ];
    window.console.log("Below are my favorite movies: \n" + printList(favoriteMoviesList));

    window.console.log("1. The second movie in the favoriteMoviesList array is \'" + favoriteMoviesList[1] + "\'.");
    

    // ==============================STEP 2==============================
    movies = new Array(5);
    for(var i = 0; i < movies.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }
    
    window.console.log("2. The first movie in the movies array is \'" + movies[0] + "\'." );


    // ==============================STEP 3==============================
    movies = new Array(5);
    for(var i = 0; i < movies.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }

    movies.splice(2, 0, "Star Wars: A New Hope");
    window.console.log("3. After adding \'Star Wars: A New Hope\' to the array, the length of the movies array is now " + movies.length + ".")
    window.console.log("Currently, the movies array contains the following: \n" + printList(movies));
    
    
    // ==============================STEP 4==============================
    movies = [];
    for(var i = 0; i < favoriteMoviesList.length; ++i) {
        movies[i] = favoriteMoviesList[i];
    }
    window.console.log("4. Deleted \'" + movies[0] + "\' from the movies array.");
    delete movies[0];
    window.console.log("Currently, the movies array contains the following: \n" + printList(movies));

    
    // ==============================STEP 5==============================
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    window.console.log("5. Using a for/in loop, the movies array contains the following movies: ");
    var output5 = "";
    for(var index in movies) {
        output5 += "  \'" + movies[index] + "\'\n";
    }
    window.console.log(output5);

    
    // ==============================STEP 6==============================
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    window.console.log("6. Using a for/of loop, the movies array contains the following movies: ");
    var output6 = "";
    for (var movie of movies) {
       output6 += ("  \'" + movie + "\'\n");
    }    
    window.console.log(output6);


    // ==============================STEP 7==============================
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';
    movies.sort();

    window.console.log("7. Using the for/of loop, the sorted version of the movies array result in the following order of movies: ");
    var output7 = "";
    for (var movie of movies) {
        output7 += "  \'" + movie + "\'\n";
    }    
    window.console.log(output7);


    // ==============================STEP 8==============================
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    var leastFavMovies = [
        'Monty Python and The Holy Grail',
        'The Green Hornet',
        'Batman v Superman: Dawn of Justice'
    ];

    window.console.log("8. These are movies I like, and the movies I regret watching: ");
    var moviesILikeOutput = 'Movies I like:\n\n';
    for(var i = 0; i < movies.length; ++i) {
        moviesILikeOutput += "\'" + movies[i] + "\'\n";
    }
    moviesILikeOutput += "\n";
    window.console.log(moviesILikeOutput);

    var moviesIRegretOutput = 'Movies I regret watching:\n\n';
    for(var i = 0; i < leastFavMovies.length; ++i) {
        moviesIRegretOutput += "\'" + leastFavMovies[i] + "\'\n";
    }
    moviesIRegretOutput += "\n";
    window.console.log(moviesIRegretOutput);


    // ==============================STEP 9============================== 
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    leastFavMovies = [
        'Monty Python and The Holy Grail',
        'The Green Hornet',
        'Batman v Superman: Dawn of Justice'
    ];

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("9. Merging movies array with the leastFavMovies array and reverse sorting it results in: ");
    window.console.log(printList(movies));


    // ==============================STEP 10============================== 
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    leastFavMovies = [
        'Monty Python and The Holy Grail',
        'The Green Hornet',
        'Batman v Superman: Dawn of Justice'
    ];

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("10. The last item in the reverse sorted array from Step 9 is \'" + movies.pop() + "\'.");


    // ==============================STEP 11============================== 
    movies = [];
    movies[0] = 'Top Gun: Maverick';
    movies[1] = 'Avengers: Endgame';
    movies[2] = 'Spider-Man: Into the Spider-Verse';
    movies[3] = 'Aladdin';
    movies[4] = 'Mary Poppins';
    movies[5] = 'Star Wars: A New Hope';
    movies[6] = 'Titanic';

    leastFavMovies = [
        'Monty Python and The Holy Grail',
        'The Green Hornet',
        'Batman v Superman: Dawn of Justice'
    ];

    movies = movies.concat(leastFavMovies);
    movies.sort();
    movies.reverse();

    window.console.log("11. The first item in the reverse sorted array from Step 10 is \'" + movies.shift() + "\'.");


    // ==============================STEP 12============================== 
    var indecesOfBadMovies = [];
    var possibleMatchIndex;
    for(var i = 0; i < leastFavMovies.length; ++i ) {
        possibleMatchIndex = movies.indexOf(leastFavMovies[i])
        if(possibleMatchIndex != -1) {
            indecesOfBadMovies.push(possibleMatchIndex);
        }
    }

    window.console.log("12. The current movies array is: \n" + printList(movies));
    window.console.log("The indices of the movies I don't like are: " + indecesOfBadMovies + ".");

    movies[indecesOfBadMovies[0]] = "Doctor Strange";
    movies[indecesOfBadMovies[1]] = "The Greatest Showman";
    movies[indecesOfBadMovies[2]] = "The Martian";

    window.console.log("After removing the movies I don't like with some new movies I do like, the updated movie array is: \n" + printList(movies));


    // ==============================STEP 13============================== 
    var movies2D = [
        ['Top Gun: Maverick', 1],
        ['Avengers: Endgame', 2],
        ['Spider-Man: Into the Spider-Verse', 3],
        ['Aladdin', 4],
        ['Mary Poppins', 5]
    ];

    var movieNamesOnly = [];
    movies2D.forEach(function (movieRankObject) {
        "use strict";
        movieNamesOnly.push(movieRankObject.filter(function (obj) {
            "use strict";
            return typeof obj === "string";
        }));
    });

    window.console.log("13. Using the filter() method, the names of my top 5 favorite movies are: \n" + printList(movieNamesOnly));


    // ==============================STEP 14============================== 
    var employees = [
        "ZAK",
        "JESSICA",
        "MARK",
        "FRED",
        "SALLY"
    ];

    var showEmployee = function(employeeArr) {
        var output = "";
        employeeArr.forEach(function (employee) {
            output += employee + "\n";
        });
        return output;
    };

    window.console.log("14. The list of employees looks like the following: ");
    window.console.log("Employees:\n\n" + showEmployee(employees));

    // ==============================STEP 15============================== 
    var filterValues = function (valuesArr) {
        return valuesArr.filter(function (value) {
            if (value == null || value == false || value == 0 || value === "")
                return false;
            else 
                return true;
        });
    }

    window.console.log("15. The filtered array of [58, \'\', \'abcd\', true, null, false, 0] is: [" + printOneLine(filterValues([58, '', 'abcd', true, null, false, 0])) + "].");


    // ==============================STEP 16============================== 
    var randomSelection = function (arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);

        return arr[randomIndex];
    }

    window.console.log("16. Given the array [4, 9, 5, 6, 2, 21, 1], we will randomly select: " + randomSelection([4, 9, 5, 6, 2, 21, 1]) + ".");
    window.console.log("    Similarly, Given the array ['Hello', 'Bye', 'Go', 'Stop', 'Run'], we will randomly select: " + randomSelection(['Hello', 'Bye', 'Go', 'Stop', 'Run']) + ".");

    // ==============================STEP 17============================== 
    var findLargest = function (numArr) {
        var largest = numArr[0];
        numArr.forEach(function (number) {
            if (number > largest)
                largest = number;
        })

        return largest;
    };

    window.console.log("17. Given the array [4, 9, 5, 6, 2, 21, 1], the largest value is: " + findLargest([4, 9, 5, 6, 2, 21, 1]) + ".");
    window.console.log("    Similarly, Given the array [4, 9, 5, 6, 2, 0, 1], the largest value is: " + findLargest([4, 9, 5, 6, 2, 0, 1]) + ".");
}
init()