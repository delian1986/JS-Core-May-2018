function xmlMessenger(str) {
    let isValid=/^<message((?:\s[a-z]+="[a-zA-Z0-9 .]+")+)>((?:.|\n)+)<\/message>$/g.exec(str);

    if (isValid){
        // let attrDetails=/\bto="([a-zA-Z0-9 .]+)" from="([a-zA-Z0-9 .]+)"/g.exec(isValid[1]);
        let to = /\bto="([a-zA-Z0-9 .]+)"/g.exec(isValid[1]);
        let from = /\bfrom="([a-zA-Z0-9 .]+)"/g.exec(isValid[1]);

        if (to!==null&&from!==null){
            let message=isValid[2].split('\n');

            let html='<article>\n' +
                `  <div>From: <span class="sender">${from[1]}</span></div>\n` +
                `  <div>To: <span class="recipient">${to[1]}</span></div>\n` +
                `  <div>\n`;
            for (let msg of message) {
                html+=`    <p>${msg}</p>\n`
            }
            html+='  </div>\n' +
                '</article>';
            console.log(html);

        } else{
            console.log('Missing attributes');
        }
    }else{
        console.log('Invalid message format');
    }
}

// xmlMessenger('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, ' +
//     'what\'s up?</message>');

xmlMessenger('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
    'Let\'s go out for a beer</message>');