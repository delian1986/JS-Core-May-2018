function buildWall(input) {
    let wall = input.map(Number);
    let concrete = [];

    while (true) {
        let isBuildOn = false;

        let dailyConcrete = 0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                dailyConcrete += 195;
                isBuildOn = true;
            }
        }

        if (!isBuildOn) {
            break;
        } else {
            concrete.push(dailyConcrete);
        }
    }

    let totalSumOfConcrete=concrete.reduce((a,b)=>a+b);
    console.log(concrete.join(', '));
    console.log(`${totalSumOfConcrete * 1900} pesos`);
}

buildWall([21, 25, 28]);