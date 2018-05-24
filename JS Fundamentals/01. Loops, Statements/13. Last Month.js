function lastMonth(date) {
    let month=date[1]-1;
    let year= date[2];

    let lastDayOfPrevMonth=new Date(year,month,0);

    console.log(lastDayOfPrevMonth.getDate());
}

lastMonth([17, 3, 2002]);