function travelPlans(inputArr) {
    let mariyka = {
        specialized: ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'],
        average: ['Driving', 'Managing', 'Fishing', 'Gardening'],
        clumsy:['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']
    };
    let specializedCount=0;
    let averageCount=0;
    let clumsyCount=0;
    let totalGold=0;

    for (let line of inputArr) {
        let [spec,gold]=line.split(' : ');
        totalGold+=Number(gold);

        if (mariyka.specialized.includes(spec)){
            specializedCount++;
        }else if(mariyka.average.includes(spec)){
            averageCount++
        }else if(mariyka.clumsy.includes(spec)){
            clumsyCount++;
        }
    }

    console.log(specializedCount);
    console.log(averageCount);
    console.log(clumsyCount);
    console.log(totalGold);
}

// travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199’, "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])