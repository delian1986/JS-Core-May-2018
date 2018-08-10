let flightServices=(()=>{
    function getPublishedFlights() {
        const endpoint='flights?query={"isPublished":"true"}';
        
        return remote.get('appdata',endpoint,'kinvey');
    }
    
    function createFlight(destination,origin,departure,time,seats,cost,image,isPublished) {
        const data={destination,origin,departure,time,seats,cost,image,isPublished};

        return remote.post('appdata','flights','kinvey',data);
    }

    function editFlight(flightId,destination,origin,departure,time,seats,cost,image,isPublished) {
        const endpoint=`flights/${flightId}`;
        const data={destination,origin,departure,time,seats,cost,image,isPublished};

        return remote.update('appdata',endpoint,'kinvey',data);
    }
    
    function deleteFlight(flightId) {
        const endpoint=`flights/${flightId}`;
        
        return remote.remove('appdata',endpoint,'kinvey');
    }

    function flightDetails(flightId) {
        const endpoint=`flights/${flightId}`;
        
        return remote.get('appdata',endpoint,'kinvey');
    }
    
    function myFlights() {
        const userId=sessionStorage.getItem('userId');
        const endpoint=`flights?query={"_acl.creator":"${userId}"}`;

        return remote.get('appdata',endpoint,'kinvey');

    }

    return{
        getPublishedFlights,
        createFlight,
        editFlight,
        deleteFlight,
        flightDetails,
        myFlights
    }
})();