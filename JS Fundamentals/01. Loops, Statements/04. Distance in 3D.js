function distanceIn3D(coords) {
    let x1=coords[0];
    let y1=coords[1];
    let z1=coords[2];

    let x2=coords[3];
    let y2=coords[4];
    let z2=coords[5];

    let deltaX = Math.abs(x2 - x1);
    let deltaY = Math.abs(y1 - y2);
    let deltaZ = Math.abs(z1 - z2);

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
