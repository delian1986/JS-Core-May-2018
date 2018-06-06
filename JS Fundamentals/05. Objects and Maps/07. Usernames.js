function usernames(input) {
    let usernames=new Set();

    for (let user of input) {
        usernames.add(user);
    }

    let sortedUsers= Array.from(usernames)
        .sort(function sortOnLength(arg1,arg2) {
            if (arg1.length>arg2.length){
                return 1;
            }
            if (arg1.length<arg2.length){
                return -1;
            }
            if (arg1.length===arg2.length){
                return arg1.localeCompare(arg2);
            }
        });

    console.log(sortedUsers.join('\n'));
}

usernames(['Ashton' ,
    'Kutcher' ,
    'Ariel' ,
    'Lilly' ,
    'Keyden' ,
    'Aizen' ,
    'Billy' ,
    'Braston']);