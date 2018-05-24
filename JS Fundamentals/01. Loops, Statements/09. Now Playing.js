function nowPlaying(track) {
    let artistName=track[1];
    let trackName=track[0];
    let duration=track[2];

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);