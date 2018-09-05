function dnaEx(input) {
    let genes = new Map();

    for (let line of input) {
        if (line === 'Stop!') {
            break;
        }
        let regex = /^((?:[A-z!@#$?]+)+)=(\d+--\d+)<<([A-z]+)$/g;
        let match;
        if ((match = regex.exec(line)) !== null) {
            let spec = match[3];
            let genomes = match[2].split(/[\-]/).filter((w) => w !== '').map(Number);
            let name=match[1].split(/[!@#\$?]/).filter((w)=>w!=='').join('');

            let length = name.length;
            if (length === genomes[0]) {
                if (!genes.has(spec)) {
                    genes.set(spec, 0);
                }
                let currGen = genes.get(spec);
                genes.set(spec, currGen + genomes[1]);
            }
        }
    }

    let sortedGenes = [...genes].sort((a, b) => {
        return b[1] - a[1]
    });

    for (let gene of sortedGenes) {
        console.log(`${gene[0]} has genome size of ${gene[1]}`);
    }

}

dnaEx(['!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!']);

// dnaEx([ '=12<<cat',
//     '!vi@rus?=2--142',
//     '?!cur##viba@cter!!=11--800<<cat',
//     '!fre?esia#=7--450<<mouse',
//     '@pa!rcuba@cteria$=13--351<<mouse',
//     '!richel#ia??=8--900<<human',
//     'Stop!' ]);

// dnaEx([ '!@ру?би#=4--57<<polecat',
//     '?do?@#ri#=4--89<<polecat',
//     '=12<<cat',
//     '!vi@rus?=2--142',
//     '@pa!rcu>ba@cteria$=13--234<<mouse',
//     '?!cur##viba@cter!!=11--680<<cat',
//     'Stop!' ])