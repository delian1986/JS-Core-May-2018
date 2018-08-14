function travelPlans(inputArr) {
    let mariyka = { //professions
        specialized: ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'],
        average: ['Driving', 'Managing', 'Fishing', 'Gardening'],
        clumsy: ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']
    };
    // order counters
    let specializedCount = 0;
    let averageCount = 0;
    let clumsyCount = 0;
    let totalGold = 0;


    for (let line of inputArr) {
        let [spec, gold] = line.split(' : ');

        if (mariyka.specialized.includes(spec) && gold >= 200) {   //Mariyka does not accept to work for less than 200 gold in her specialized professions
            addGold(gold - (gold * 0.2)); //Mariyka is spending 20% for candies.
            specializedCount++;
            if (specializedCount % 2 === 0) {
                addGold(200); //every second customer gives her 200 bonus.
            }
        } else if (mariyka.average.includes(spec)) {
            addGold(gold);
            averageCount++
        } else if (mariyka.clumsy.includes(spec)) {
            clumsyCount++;
            if (clumsyCount % 2 === 0) {
                addGold(gold - (gold * 0.05)); //every second customer gives her 5% less.
            } else if (clumsyCount%3===0){
                addGold(gold - (gold * 0.1)); //every third customer gives her 10% less.
            }else {
                addGold(gold);
            }
        }
    }

    function addGold(gold) {   //gold counter
        totalGold += Number(gold);
    }

    //result
    console.log(`Final sum: ${totalGold.toFixed(2)}`);
    if (totalGold < 1000) {
        let neededGold = 1000 - totalGold;
        console.log(`Mariyka need to earn ${neededGold.toFixed(2)} gold more to continue in the next task.`);
    } else {
        let earnedGold = totalGold - 1000;
        console.log(`Mariyka earned ${earnedGold.toFixed(2)} gold more.`);
    }

}

travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
// travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
