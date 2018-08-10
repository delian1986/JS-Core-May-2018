let entriesServices=(()=>{
    function createEntry(type,qty,price,receiptId) {
        let data={type,qty,price,receiptId};

        return remote.post('appdata','entries','kinvey',data);
    }

    function deleteEntry(entryId) {
        return remote.remove('appdata',`entries/${entryId}`,'kinvey')
    }

    function getEntries(receiptId) {
        const endpoint=`entries?query={"receiptId":"${receiptId}"}`;

        return remote.get('appdata',endpoint,'kinvey')
    }
    return{

        createEntry,
        deleteEntry,
        getEntries
        
    }
})();