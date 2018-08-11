let shopServices=(()=>{
   function getAllShop() {
       return remote.get('appdata','products','kinvey')
   }

   function listUser(userId) {
       return remote.get('user',userId,'kinvey')
   }

   function updateUser(userId,data) {
       return remote.update('user',userId,'kinvey',data)
   }

   function getProductById(prodId) {
       return remote.get('appdata',`products/${prodId}`,'kinvey')
   }
    
    return{
        getAllShop,
        listUser,
        updateUser,
        getProductById

    }
})();