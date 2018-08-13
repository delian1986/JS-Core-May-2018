let adsServices=(()=>{
    function listAllAds() {
        return remote.get('appdata','adv?query={}&sort={"views": -1}','kinvey')
    }
    
    function createAd(title,description,date,price,imageUrl) {
        const publisher=sessionStorage.getItem('username');
        let data={title,description,date,price,"views":0,publisher,imageUrl};

        return remote.post('appdata','adv','kinvey',data);
    }

    function editAd(adId,title,description,date,price,views,imageUrl) {
        let publisher=sessionStorage.getItem('username');
        let data={title,description,date,price,views,publisher,imageUrl};

        return remote.update('appdata',`adv/${adId}`,'kinvey',data);
    }

    function incrementViews(adId,title,description,date,price,views,publisher,imageUrl) {
        views=Number(views)+1;
        let data={title,description,date,price,views,publisher,imageUrl};
        return remote.update('appdata',`adv/${adId}`,'kinvey',data);
    }

    function deleteAd(adId) {
        return remote.remove('appdata',`adv/${adId}`,'kinvey');
    }

    function getAd(adId) {
        return remote.get('appdata',`adv/${adId}`,'kinvey');
    }

    
    
    return{
        listAllAds,
        createAd,
        editAd,
        incrementViews,
        deleteAd,
        getAd
    }
    
})();