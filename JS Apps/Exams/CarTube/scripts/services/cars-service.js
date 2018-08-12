let carsServices=(()=>{

    function listAllCars() {
        const endpoint='cars?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata',endpoint,'kinvey');
    }

    function createCarListing(brand,description,fuel,imageUrl,model,price,seller,title,year) {
        const endpoint='cars';
        const data={brand,description,fuel,imageUrl,model,price,seller,title,year};

        return remote.post('appdata',endpoint,'kinvey',data);
    }

    function editCarListing(carId,brand,description,fuel,imageUrl,model,price,seller,title,year) {
        const endpoint=`cars/${carId}`;
        const data={brand,description,fuel,imageUrl,model,price,seller,title,year};

        return remote.update('appdata',endpoint,'kinvey',data);
    }

    function deleteCarListing(carId) {
        const endpoint=`cars/${carId}`;

        return remote.remove('appdata',endpoint,'kinvey');
    }
    
    function myCarListings() {
        const username=sessionStorage.getItem('username');
        const endpoint=`cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    function carDetails(carId) {
        const endpoint=`cars/${carId}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    return{
        listAllCars,
        createCarListing,
        editCarListing,
        deleteCarListing,
        myCarListings,
        carDetails

    }

})();