function processCommands(commands) {
    let command = (function () {
        let text = '';
        return {
            append: (t)=>text = text + t,
            removeStart: (count)=>text = text.slice(count),
            removeEnd: (count)=>text = text.slice(0, text.length - count),
            print: function () {
                console.log(text);
            }
        };
    })();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        command[cmdName](arg);
    }

}