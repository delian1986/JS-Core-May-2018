function tickets(arr, criteria) {
    class Ticket {
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }

    let allTickets=[];

    for (let row of arr) {
        let args=row.split('|');
        let ticket=new Ticket(args[0],Number(args[1]),args[2]);
        allTickets.push(ticket)
    }

    switch (criteria){
        case 'destination':allTickets.sort((a,b)=>a.destination.localeCompare(b.destination));
            break;
        case 'price': allTickets.sort((a,b)=>a.price-b.price);
            break;
        case 'status':allTickets.sort((a,b)=>a.status.localeCompare(b.status));
        break
    }
    return allTickets;
}

let result=tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
console.log(result);