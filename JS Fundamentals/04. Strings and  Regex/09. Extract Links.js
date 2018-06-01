function extractLinks(text) {
    let links=[];
    let m;
    let regex = /(www)\.([A-Za-z0-9\-]+)(\.[a-z]+)+/gmi;

    for (let line of text) {
        while (m=regex.exec(line)){
            links.push(m[0]);
        }
    }

    console.log(links.join('\n'));
}

extractLinks([ 'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko ' ]);