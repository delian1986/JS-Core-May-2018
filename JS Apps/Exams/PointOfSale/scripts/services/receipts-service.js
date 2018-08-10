const receiptService=(()=>{
    function getMyReceipts() {
        let userId=sessionStorage.getItem('userId');
        let endpoint=`receipts?query={"_acl.creator":"${userId}","active":"false"}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    function getActiveReceipt(userId) {
        const endpoint=`receipts?query={"_acl.creator":"${userId}","active":"true"}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    function createReceipt() {
        let data={
            "active": true,
            "productCount": 0,
            "total": 0
        };

        return remote.post('appdata','receipts','kinvey',data)
    }

    async function commitReceipt(receiptId,productCount,total) {
        let receipt=await receiptDetails(receiptId);
        receipt['active']=false;
        receipt['productCount']=productCount;
        receipt['total']=total;

        return remote.update('appdata',`receipts/${receiptId}`,'kinvey',receipt)
    }

    function receiptDetails(receiptId) {
        return remote.get('appdata',`receipts/${receiptId}`,'kinvey')
    }

    return{
        getMyReceipts,
        getActiveReceipt,
        createReceipt,
        commitReceipt,
        receiptDetails

    }
    
})();