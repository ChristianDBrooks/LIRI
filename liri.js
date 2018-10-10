// SETUP

require('dotenv').config();
// Pulling local files.
var keys = require("./keys")
// Requiring Packages
var request = require('request');
var fs = require('file-system')
var moment = require('moment');
var Spotify = require('node-spotify-api');
// Pushing keys to spotify api
var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
    case 'concert-this':
        concert()
        break;
    case 'spotify-this-song':
        spotifyThis()
        break;
    case 'movie-this':
        movie()
        break;
    case 'do-what-it-says':
        doWhatItSays()
        break;
}

function argumentConstructer(seperator) {
    var constructedArgument = process.argv.splice(3).join(seperator);
    return constructedArgument;
}

function concert() {
    var artist = argumentConstructer("+");
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (err, response, body) {
        console.log("\n==============================================================\n")
        console.log('The next concert is "' + JSON.parse(body)[0].venue.name + '"');
        console.log('This concert is in: ' + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
        var Date = JSON.parse(body)[0].datetime;
        var date = moment(Date.substring(0, Date.indexOf("T"))).format("MM/DD/YYYY");
        console.log('Date: ' + date);
        console.log("\n==============================================================\n")
    })
}

function spotifyThis() {
    var search = argumentConstructer(" ");
    if (!process.argv[3]) {
        console.log("Defaulting to 'The Sign' by Ace of Base.");
        spotify.search({ type: 'track', query: 'The Sign', limit: 3}, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            };
            for (var i = 0; i < data.tracks.items.length; i++) {
                console.log("===========================================\n")
                console.log('Artist: ' + data.tracks.items[i].album.artists[0].name);
                console.log('Song: ' + data.tracks.items[i].name);
                console.log('Preview: ' + data.tracks.items[i].preview_url);
                console.log("\n===========================================")
            }
        });
    } else {
        spotify.search({ type: 'track', query: search }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
        });
    }
}

function movie() {
    if (!process.argv[3]) {
        console.log("Defaulting to 'Mr. Nobody'");
        request("http://www.omdbapi.com/?apikey=fc40c3c&plot=full&t=Mr.+Nobody", function (err, response, body) {
            console.log("\n==============================================================\n")
            console.log('Title: ' + JSON.parse(body).Title);
            console.log('Year: ' + JSON.parse(body).Year);
            console.log('IMDB Rating: ' + JSON.parse(body).imdbRating);
            console.log('Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value);
            console.log('Country: ' + JSON.parse(body).Country);
            console.log('Languages: ' + JSON.parse(body).Language);
            console.log('Actors: ' + JSON.parse(body).Actors);
            console.log("\n==============================================================\n")
            console.log("Plot\n");
            console.log(JSON.parse(body).Plot);
            console.log("\n==============================================================\n")
        })
    } else {
        var search = argumentConstructer("+");
        request("http://www.omdbapi.com/?apikey=fc40c3c&plot=full&t=" + search, function (err, response, body) {
            console.log("\n==============================================================\n")
            console.log('Title: ' + JSON.parse(body).Title);
            console.log('Year: ' + JSON.parse(body).Year);
            console.log('IMDB Rating: ' + JSON.parse(body).imdbRating);
            console.log('Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value);
            console.log('Country: ' + JSON.parse(body).Country);
            console.log('Languages: ' + JSON.parse(body).Language);
            console.log('Actors: ' + JSON.parse(body).Actors);
            console.log("\n==============================================================\n")
            console.log("Plot\n");
            console.log(JSON.parse(body).Plot);
            console.log("\n==============================================================\n")
        })
    }
}

// function doWhatItSays() {

// }