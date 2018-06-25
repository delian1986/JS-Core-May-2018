function travelPlans(inputArr) {
    let mariyka = {
        specialized: ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'],
        average: ['Driving', 'Managing', 'Fishing', 'Gardening'],
        clumsy:['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing']
    };

    for (let i = 0; i < inputArr.length; i++) {
        let args=inputArr[i].split(/\W+/);
        for (let mariykaElement in mariyka) {
            for (let value of mariyka[mariykaElement]) {
                console.log(value);
            }
        }
    }
}

// travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199’, "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"])