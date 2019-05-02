console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    omdbKey: process.env.OMDB_API_KEY
}

exports.bandsInTown = {
    bandsInTownKey: process.env.BANDS_IN_TOWN_API_KEY
}


//axios call to omdbapi