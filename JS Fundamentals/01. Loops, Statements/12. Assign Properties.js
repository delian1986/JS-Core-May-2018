function assignProperties(args) {
    let object={};

    for (let i = 0; i < args.length; i+=2) {
        let prop=args[i];
        let value= args[i+1];
        object[prop]=value;
    }

    console.log(object);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);