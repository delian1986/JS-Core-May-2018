function compoundInterest([principal, interestRate, compoundingPeriod, timespan]) {
    [principal, interestRate, compoundingPeriod, timespan] = [principal, interestRate, compoundingPeriod, timespan].map(Number);
    let compoundInterest = principal * Math.pow(1 + interestRate/(100*( 12/compoundingPeriod)), 12/compoundingPeriod * timespan);
    console.log(compoundInterest.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);