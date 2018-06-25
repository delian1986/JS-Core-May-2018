function crew(worker) {
    if (worker.handsShaking===true){
        worker.bloodAlcoholLevel+=0.1*Number(worker.weight)*Number(worker.experience);
        worker.handsShaking=false;
    }
    return worker
}

console.log(crew({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));