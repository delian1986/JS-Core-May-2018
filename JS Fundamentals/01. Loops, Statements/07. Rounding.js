function rounding(args) {
    let number=parseFloat(args[0]);
    let precision=parseInt(args[1]);
    if (precision>15){
        precision=15;
    }

    let roundedNum=number.toFixed(precision);
    console.log((roundedNum*1).toString());
}

rounding([3.5, 3]);