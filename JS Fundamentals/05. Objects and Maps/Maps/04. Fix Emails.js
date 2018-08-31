function fixEmails (input) {
    let contacts = new Map();

    for (let i = 0; i < input.length; i += 2) {
        if (input[i] === 'stop') {
            break;
        } else {
           let name=input[i];
           let email=input[i+1];

           if (email.endsWith('.us')||email.endsWith('.uk')){
              continue;
           }else{
               if (!contacts.has(name)){
                   contacts.set(name,'');
               }
               contacts.set(name,email)
           }
        }
    }
    for (const element of [...contacts]) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

fixEmails([ 'Ivan',
    'ivanivan@abv.bg',
    'Petar Ivanov',
    'petartudjarov@abv.bg',
    'Mike Tyson',
    'myke@gmail.us',
    'stop' ]
);