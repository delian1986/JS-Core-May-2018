function solve(arrCmds) {
    let objParser=(()=>{
       let obj={};
       function create(args) {
           let objName=args[0];
           if (args.length===1){
               obj[objName]={};
           }else{
               let parent=obj[args[2]];
               obj[objName]=Object.create(parent);
           }
       }
       function set(args) {
           let objectToManipulate=args[0];
           let key=args[1];
           let value=args[2];
           obj[objectToManipulate][key]=value;
       }
       function print(name) {
           let result=[];
           let objToPrint=name[0];
           for (let prop in obj[objToPrint]) {
               result.push(`${prop}:${obj[objToPrint][prop]}`);
           }
           console.log(result.join(', '));
       }
       return{create,set,print};
    })();

    for (let cmd of arrCmds) {
        let args=cmd.split(' ');
        let command=args.shift();
        let action=args;
        
        if (command==='create'){
            objParser['create'](action);
        }else if(command==='set'){
            objParser['set'](action);
        }else{
            objParser['print'](action);

        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);