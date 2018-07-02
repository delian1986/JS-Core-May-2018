function tickets(inputArray, criteria) {
    class Ticket {
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }

    let allTickets=[];

    for (let row of inputArray) {
        let [destination,price,status]=row.split('|');
        let ticket=new Ticket(destination,Number(price),status);
        allTickets.push(ticket)
    }

    return allTickets.sort((a, b) => a[criteria] > b[criteria]);
}

let result=tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
console.log(result);