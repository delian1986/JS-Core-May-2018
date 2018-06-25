function solve(arrCommands) {



    let listProcessor=(()=>{
        let list=[];
        function add(string) {
            return list.push(string)
        }
        function remove(string) {
            return list=list.filter(e=>e!==string);
        }
        function print() {
            console.log(list.join(','));
        }
        return{add,remove,print};
    })()

    for (let cmd of arrCommands) {
        let args=cmd.split(' ');
        listProcessor[`${args[0]}`](args[1]);
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// listProcessor.add('item');
// listProcessor.print();
//     listProcessor.add('js');
// listProcessor.print();
//     listProcessor.add('item');
//     listProcessor.print();
//
//     listProcessor.remove('item');
// listProcessor.print();

