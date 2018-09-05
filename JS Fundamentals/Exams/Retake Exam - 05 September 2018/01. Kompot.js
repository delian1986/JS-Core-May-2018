function kompot(input) {
    let cheeryWeight = 0;
    let peachWeight = 0;
    let plumWeight = 0;
    let elseWeight = 0;

    for (let line of input) {
        let args = line.split(' ').filter((w)=>w!=='');
        let fruit=args[0].trim();
        let we=args[1].trim();
        let weight=Number(we);

        if (fruit.trim() === 'cherry') {
            cheeryWeight += Number(weight);
        } else if (fruit.trim() === 'peach') {
            peachWeight += Number(weight);
        } else if (fruit.trim() === 'plum') {
            plumWeight += Number(weight);
        } else {
            elseWeight += Number(weight);
        }
    }

    console.log(`Cherry kompots: ${Math.floor(cheeryWeight * 1000 / 9 / 25)}`);
    console.log(`Peach kompots: ${Math.floor(peachWeight * 1000 / 140 / 2.5)}`);
    console.log(`Plum kompots: ${Math.floor(plumWeight * 1000 / 20 / 10)}`);

    //rakiya
    let rakiya=((elseWeight * 0.2));
    console.log(`Rakiya liters: ${rakiya.toFixed(2)}`);
}

kompot(['cherry          1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);

kompot([   'apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        ,'watermelon 20.54'
    ]
)