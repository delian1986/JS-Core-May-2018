function softUniReception(input) {
    let queueOfStudents = Number(input.splice(-1, 1));
    let answersPerHour = input.map(Number).reduce((a, b) => {
        return a + b
    });
    let hours = 0;

    if (queueOfStudents>0){
        while (true) {
            queueOfStudents = queueOfStudents - answersPerHour;
            hours++;
            if (hours % 4 === 0) {
                hours++;
            }
            if (queueOfStudents <= 0) {
                break;
            }
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

// softUniReception(['5', '6', '4', '20']);
// softUniReception([ '1', '2', '3', '45' ]);
softUniReception([ '0', '0', '0', '0' ]);