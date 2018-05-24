function disctOverTime(args) {
    let speedOne=Number(args[0]);
    let speedTwo=Number(args[1]);
    let time=Number(args[2]);

    let timeInHours=time/60/60;

    let distOne=speedOne*timeInHours;
    let distTwo=speedTwo*timeInHours;

    let delta=Math.abs(distOne-distTwo);

    console.log(delta * 1000);
}

//disctOverTime([0,60,3600]);
disctOverTime([11,10,120]);