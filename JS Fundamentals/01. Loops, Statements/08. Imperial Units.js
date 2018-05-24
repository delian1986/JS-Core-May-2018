function imperialUnits(feets) {
    let feet=parseInt(feets/12);
    let inches=feets%12;

    console.log(feet+'\'' + '-' + inches+'"');
}

imperialUnits(11);