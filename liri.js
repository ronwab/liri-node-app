require("dotenv").config();
let Loggers = require('./logger')
var Spotify = require("node-spotify-api")
var fs = require('fs')
var keys = require("./keys.js");
var inquirer = require('inquirer');
var axios = require('axios')
let actionChoice = process.argv[2]
let spotify = new Spotify(keys.spotify);
const OMDBAPI = keys.omdb.omdbKey
const bandsAPI = keys.bandsInTown.bandsInTownKey
const artist = ''
let url = '';
let movie = '';
let Year = '';
let RottenTomatoeRating = '';
let IMDBRating = ''
let Actors = '';
let concertVenue = '';
let concertCity = '';
let concertDate = '';

let artistName = '';
let songPreviewUrl = '';
let albumName = '';
let searchMe = ''
const MovieObject = ''
const SpotifySong = ''
const bandInfo = ''

let movieLogged = new Loggers()
let spotifyLog = new Loggers()
let bandlog = new Loggers()


if (actionChoice === "concert-this") {
    bandsInTown()
} else if (actionChoice === "spotify-this-song") {
    spotifyMusic()
} else if (actionChoice === "movie-this") {
    getMovie()
} else if (actionChoice === "do-what-it-says") {
    randomText()
}

function getMovie() {
    inquirer
        .prompt({
            type: 'input',
            message: 'movie-this',
            name: 'movieTitle'
        }).then((data) => {

            if (data.movieTitle) {
                url = "http://www.omdbapi.com/?apikey=" + OMDBAPI + "&t=" + data.movieTitle + ""

                axios.get(url)
                    .then((res) => {
                        movie = res.data.Title;
                        Year = res.data.Released;
                        RottenTomatoeRating = res.data.Ratings[1].Value;
                        IMDBRating = res.data.imdbRating
                        Actors = res.data.Actors

                        console.log(`movieTitle: ${movie}`);
                        console.log(`Year: ${Year}`);
                        console.log(`IMDBRating: ${IMDBRating}`);
                        console.log(`RottenTomatoeRating: ${RottenTomatoeRating}`);
                        console.log(`Actors: ${Actors}`);

                        MovieObject = ` 
                        MovieTitle: ${movie} 
                        Year Released: ${Year}
                        Ratings: ${RottenTomatoeRating}
                        Actors: ${Actors}
                       `
                        movieLogged.logMovie(MovieObject)

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                let defaultmovie = "Mr. Nobody "
                url = "http://www.omdbapi.com/?apikey=" + OMDBAPI + "&t=" + defaultmovie + ""
                console.log(url);

                axios.get(url)
                    .then((res) => {

                        console.log(`movieTitle: ${res.data.Title}`);
                        console.log(`Year: ${res.data.Released}`);
                        console.log(`IMDBRating: ${res.data.imdbRating}`);
                        console.log(`RottenTomatoeRating: ${res.data.Ratings[1].Value}`);
                        console.log(`Actors: ${res.data.Actors}`);

                    }).catch((err) => {
                        console.log(err);
                    })
            }
        }).catch((err) => {
            console.log(err);
        })

}

function spotifyMusic() {
    inquirer.prompt({
        type: 'input',
        message: 'spotify-this-song',
        name: 'spotify'
    }).then((data) => {
        searchMe = JSON.stringify(data.spotify)
        spotifySearch()

    })
}
function spotifySearch() {
    spotify.search({
        type: 'track',
        query: searchMe
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(`Artist: ${searchMe}`);
        console.log(`Band Name: ${data.tracks.items[0].album.artists[0].name}`);
        console.log(`Preview URL: ${data.tracks.items[1].preview_url}`);
        console.log(`Album Name: ${data.tracks.items[1].album.name}`);

        artistName = data.tracks.items[0].album.artists[0].name;
        songPreviewUrl = data.tracks.items[1].preview_url;
        albumName = data.tracks.items[1].album.name;

        SpotifySong = `
          Track title: ${searchMe};
          Artist Name: ${data.tracks.items[0].album.artists[0].name};
          Preview URL: ${data.tracks.items[1].preview_url};
          Album: ${data.tracks.items[1].album.name};
        `
        spotifyLog.logSpotify(SpotifySong)

    });
}

function bandsInTown() {
    inquirer.prompt({
        type: 'input',
        message: 'Concert This',
        name: 'concert'
    }).then((data) => {

        url = "https://rest.bandsintown.com/artists/" + data.concert + "/events?app_id=" + bandsAPI + ""
        axios.get(url)
            .then((res) => {

                console.log(`Band Name: ${data.concert}`);
                console.log(`Concert Venue: ${res.data[0].venue.name}`);
                console.log(`Concert City: ${res.data[0].venue.city}`);
                console.log(`Concert Date: ${res.data[0].datetime}`);

                concertBandName = data.concert
                concertVenue = res.data[0].venue.name;
                concertCity = res.data[0].venue.city;
                concertDate = res.data[0].datetime

                bandInfo = `       
                Band Name: ${concertBandName} 
                Concert Venue: ${concertVenue}
                Concert city: ${concertCity}
                Concert Date: ${concertDate}
               `
                bandlog.logBands(bandInfo)

            }).catch((err) => {
                console.log("Not found. Please  enter valid concert")
            })
    })
}

function randomText() {
    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        } else {
            searchMe = data
            console.log(searchMe);
            spotifySearch()
        }
    })

}