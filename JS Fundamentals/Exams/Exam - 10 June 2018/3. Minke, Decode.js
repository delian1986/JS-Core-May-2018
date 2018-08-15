function minkeDecode(input) {
    let country = countryExtractor();
    let town=numbersToTown();

    console.log(`${country} => ${town}`);

    function numbersToTown() {

        let town = '';
        let numberPattern = /[0-9]{3}(\.[0-9]*)?/g;
        input[3].match(numberPattern).forEach((n) => {
            town += String.fromCharCode(Math.ceil(Number(n)));
        });
        return town.charAt(0).toUpperCase() + town.substr(1);

    }

    function countryExtractor() {
        let countryPattern = /\b[A-Z][a-z]+?[A-Z]\b/gm;
        let startPos = input[0];
        let endPos = Number(input[1]) + 1;
        let replacement = input[2];

        let country = input[3].match(countryPattern)[0].toString();

        let subStart = country.substr(0, startPos);
        let subEnd = country.substr(endPos);
        return subStart + replacement + subEnd.toLowerCase();
    }
}

// minkeDecode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
minkeDecode(["1", "4", "loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);