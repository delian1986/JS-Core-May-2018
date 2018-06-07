function gladiatorInventory(items) {
    let inventory = new Set();

    for (let i = 0; i < items.length; i++) {
        let args = items[i].split(/\s+/);
        if (i == 0) {
            for (let item of args) {
                inventory.add(item);
            }
        } else {
            if (args[0] === 'Buy') {
                for (let j = 1; j < args.length; j++) {
                    inventory.add(args[j]);
                }
            } else if (args[0] === 'Trash') {
                for (let j = 1; j < args.length; j++) {
                    inventory.delete(args[j]);
                }
            } else if (args[0] === 'Repair') {
                for (let j = 1; j < args.length; j++) {
                    if (inventory.has(args[j])) {
                        inventory.delete(args[j]);
                        inventory.add(args[j]);
                    }
                }
            } else if (args[0] === 'Upgrade') {
                for (let j = 1; j < args.length; j++) {
                    let updrade = args[j].split('-');
                    if (inventory.has(updrade[0])){
                        
                    }
                }
            }

        }

    }
        console.log(inventory);
}

gladiatorInventory(['Spear SWORD Shield' ,
'Buy       Bag' ,
'Trash Shield' ,
'Repair Spear' ,
'Upgrade SWORD-Steel' ,
'Fight!']);

