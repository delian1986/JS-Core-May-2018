const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';

const header = {'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q'};

let loadStudents = $.ajax({
    method: 'GET',
    url: baseUrl,
    headers: header
});
loadStudents.then(displayStudents);
loadStudents.catch(displayError);

function displayStudents(students) {
    console.dir(students);

    students = students.sort((a, b) => Number(a.ID) - Number(b.ID));
    for (let student of students) {
        let tr = $('<tr>');
        tr.append($(`<td>${student.ID}</td>`))
            .append($(`<td>${student.FirstName}</td>`))
            .append($(`<td>${student.LastName}</td>`))
            .append($(`<td>${student.FacultyNumber}</td>`))
            .append($(`<td>${student.Grade}</td>`))
        $('#results tbody').append(tr)
    }
}

function displayError(err) {
    $('#results tbody').empty();
    $('#results tbody').append(err)
}

$('#submit').on('click', function () {
    let inputs = $('.student input');
    console.log(inputs);
    let ID = Number($(inputs[0]).val());
    let FirstName = $(inputs[1]).val();
    let LastName = $(inputs[2]).val();
    let FacultyNumber = $(inputs[3]).val();
    let Grade = Number($(inputs[4]).val());

    for (let input of inputs) {
        $(input).val('')
    }

    if (ID !== '' && FirstName !== '' && LastName !== '' && FacultyNumber !== '' && Grade !== '') {
        $.ajax({
            method:'POST',
            url:'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students',
            headers:header,
            data:JSON.stringify({ID,FirstName,LastName,FacultyNumber,Grade})
        }).then(displayStudents).catch(displayError)
    }
});
