function personalBMI(name, age, weight, height) {
    let person = {};
    person.name = name;
    person.personalInfo = {};
    person.personalInfo.age = age;
    person.personalInfo.weight = weight;
    person.personalInfo.height = height;

    let bmi = Math.round((weight / (height / 100 * height / 100)));
    person.BMI = bmi;

    if (bmi<18.5) {
        person.status = 'underweight';
    }else if(bmi<25){
        person.status = 'normal';
    }else if(bmi<30){
        person.status = 'overweight';
    }else if (bmi>30){
        person.status = 'obese';
        person.recommendation= 'admission required';
    }
    return person;

}

personalBMI('Peter', 29, 75, 182);
personalBMI('Honey Boo Boo', 9, 57, 137);