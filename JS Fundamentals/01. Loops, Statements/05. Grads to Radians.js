function gradsToRadians(input) {
    let grads = Number(input);
    let diff = (400 / 360);

    if (grads > 360) {
        grads = (grads % 400) / diff;
    }
    else if (grads < 0) {
        if (grads < -400) {
            grads = grads % 400;
        }
        grads = 360 + grads / diff;
    }
    else {
        grads = grads / diff;
    }
    console.log(grads);
}

gradsToRadians(-50);
// gradsToRadians(400);
// gradsToRadians(100);