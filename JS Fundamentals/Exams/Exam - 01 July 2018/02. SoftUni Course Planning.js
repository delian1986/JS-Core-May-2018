function softUniCoursePlanning(input) {
    let schedule = [];
    let courses = input.shift(); //taking courses from first element of the array and removing it from the input

    courses.split(', ').forEach((i) => { //filling the course schedule
        schedule.push(i)
    });

    for (let command of input) {
        if (command.toLowerCase() !== 'course start') {
            let args = command.split(':');
            switch (args[0]) { //Add:{lessonTitle}
                case 'Add':
                    addLesson(args[1]);
                    break;
                case 'Insert': //Insert:{lessonTitle}:{index}
                    insertLesson(args[1], Number(args[2]));
                    break;
                case 'Swap': //Swap:{lessonTitle}:{lessonTitle}
                    swapCourses(args[1], args[2]);
                    break;
                case 'Exercise': //Exercise:{lessonTitle}
                    addExercise(args[1]);
                    break;
                case 'Remove': //Remove:{lessonTitle}
                    removeCourse(args[1]);
                    break;
            }
        }
    }

    //print the final course schedule
    (function output () {
        let result = '';
        for (let i = 0; i < schedule.length; i++) {
            result += `${i + 1}.${schedule[i]}\n`;
        }
        console.log(result.trim());
    })();


    function removeCourse(course) {
        let indexOfCourse = schedule.indexOf(course);
        let indexOfExercise = schedule.indexOf(`${course}-Exercise`);
        if (indexOfCourse !== -1) {
            schedule.splice(indexOfCourse, 1);
        } else if (indexOfExercise !== -1) {
            schedule.splice(indexOfExercise, 1);
        }
    }

    function addExercise(course) {
        let indexOfExercise = schedule.indexOf(`${course}-Exercise`);
        if (schedule.includes(course) && indexOfExercise === -1) {
            let indexOfCourse = schedule.indexOf(course);
            schedule.splice(indexOfCourse + 1, 0, `${course}-Exercise`);
        } else if (!schedule.includes(course)) {
            schedule.push(course, `${course}-Exercise`);
        }
    }

    function addLesson(course) {
        schedule.push(course);
    }

    function insertLesson(course, index) {
        if (schedule.indexOf(course)===-1 && (index < schedule.length || index >= 0)) {
            schedule.splice(index, 0, course);
        }
    }

    function swapCourses(course1, course2) {
        if (schedule.includes(course1) && schedule.includes(course2)) {
            let course1Index = schedule.indexOf(course1);
            let course2Index = schedule.indexOf(course2);

            schedule[course1Index] = course2;
            schedule[course2Index] = course1;
            let course1IndexExercise = schedule.indexOf(`${course1}-Exercise`);
            if (course1IndexExercise !== -1) {
                schedule.splice(course1IndexExercise,1);
                schedule.splice(course2Index + 1, 0, `${course1}-Exercise`);
            }
            let course2IndexExercise = schedule.indexOf(`${course2}-Exercise`);
            if (course2IndexExercise !== -1) {
                schedule.splice(course2IndexExercise,1);
                schedule.splice(course1Index + 1, 0, `${course2}-Exercise`);
            }
        }
    }
}

// softUniCoursePlanning([ 'Data Types, Objects, Lists',
//     'Add:Databases',
//     'Insert:Arrays:0',
//     'Remove:Lists',
//     'course start' ]);

softUniCoursePlanning(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start']);

