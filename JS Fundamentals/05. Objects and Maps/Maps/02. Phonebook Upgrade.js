function phonebook (input) {
    let phonebook=new Map();

    for (let line of input) {
        if (line==='END'){
            break;
        }
        else if(line==='ListAll'){
            let sortByName=[...phonebook].sort((a,b)=>{
                return a[0].localeCompare(b[0])
            });

            for (let contact of sortByName) {
                console.log(`${contact[0]} -> ${contact[1]}`);
            }

        }
        else{
            let args=line.split(' ');

            if (args[0]==='A'){
                let name= args[1];
                let number= args[2];

                if (!phonebook.has(name)){
                    phonebook.set(name,'')
                }
                phonebook.set(name,number)
            } else{
                let name=args[1];
                if (phonebook.has(name)){
                    let phone=phonebook.get(name);
                    console.log(`${name} -> ${phone}`);
                }else{
                    console.log(`Contact ${name} does not exist.`);
                }
            }
        }
    }

}

// phonebook([ 'A Nakov 0888080808', 'S Mariika', 'S Nakov', 'END' ]);
// phonebook([ 'A Misho +359883123', 'A Misho 02/3123', 'S Misho', 'END' ]);
phonebook([ 'A Nakov +359888001122',
    'A RoYaL(Ivan) 666',
    'A Gero 5559393',
    'A Simo 02/987665544',
    'S Simo',
    'S simo',
    'S RoYaL',
    'S RoYaL(Ivan)',
    'ListAll',
    'END' ]);