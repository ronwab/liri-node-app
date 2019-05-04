fs = require('fs')
class Loggers {
    logMovie(movielogger) {

        fs.appendFile('./log.txt', movielogger, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    logSpotify(spotifyLogger) {
        fs.appendFile('./log.txt', spotifyLogger, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    logBands(bandLogger) {
        fs.appendFile('./log.txt', bandLogger, (err) => {
            if (err) {
                console.log("Not found. Please  enter valid concert");
            }
        })
    }
}
module.exports = Loggers