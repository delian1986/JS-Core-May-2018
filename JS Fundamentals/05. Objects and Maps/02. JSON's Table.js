function jsonTable(input) {
    let html = '<table>\n';
    for (let line of input) {
        line = JSON.parse(line);
        html += '\t<tr>\n';

        html += `\t\t<td>${line.name}</td>\n`;
        html += `\t\t<td>${line.position}</td>\n`;
        html += `\t\t<td>${line.salary}</td>\n`;
        html += '\t<tr>\n';

    }
    html += '</table>';

    console.log(html);
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);