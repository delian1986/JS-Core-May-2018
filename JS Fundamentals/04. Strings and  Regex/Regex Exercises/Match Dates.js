function matchDates(input) {
    let regex = /([0-9]{2})([\/\-.])([A-Z]([a-z]{2}))\2([0-9]{4})/g;

    let match;

    while (match=regex.exec(input[0])){
        console.log((`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[5]}`));
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);