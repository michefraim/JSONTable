"use strict";

function tPassed(sTime, fTime) { // calculates time passed 
    const diffTime = Math.abs(fTime - sTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffDays > 1) {
        return diffDays + " Days";
    }
    return diffHours + " Hours"
}

function fPercents(tGiven, tFinished) { // calculates finished tasks in percents of total.
    return Math.floor(((tFinished / tGiven) * 100));
}


const tasks = [
    {
        startTime: new Date("2021-01-17:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "JavaScript",
    },

    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "CSS",
    },
    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "HTML",
    },
    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "LandingPage",
    },
    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "Portfolio",
    },
    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "Tribute",
    }
];

for (let i = 0; i < tasks.length; i++) {
    tasks[i].timePassed = tPassed(tasks[i].startTime, tasks[i].finishTime);
    tasks[i].finishedPercents = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) + "%";
}

const tableHead = '<tr><th>Topic:</th><th>Start:</th><th>Finish:</th></th><th>Time Taken:</th>'
    + '<th>FinishPercents:</th></th><th>Time Taken:</th></th><th>Tasks:</th></tr>';

let row1 = '<tr>';
let row2 = '<tr>';
let row3 = '<tr>';
let row4 = '<tr>';
let row5 = '<tr>';
let row6 = '<tr>';
let row7 = '<tr>';

for (let i = 0; i < tasks.length; i++) {
    for (var prop in tasks[i]) {
        if (Object.prototype.hasOwnProperty.call(tasks[i], prop)) {
            switch (i) {
                case 0:
                    {
                        row1 += '<td>';
                        row1 += tasks[i][prop];
                        row1 += '</td>'
                        break;
                    }

                case 1:
                    {
                        row2 += '<td>';
                        row2 += tasks[i][prop];
                        row2 += '</td>'
                        break;
                    }

                case 2:
                    {
                        row3 += '<td>';
                        row3 += tasks[i][prop];
                        row3 += '</td>'
                        break;
                    }

                case 3:
                    {
                        row4 += '<td>';
                        row4 += tasks[i][prop];
                        row4 += '</td>'
                        break;
                    }

                case 4:
                    {
                        row5 += '<td>';
                        row5 += tasks[i][prop];
                        row5 += '</td>'
                        break;
                    }

                case 5:
                    {
                        row6 += '<td>';
                        row6 += tasks[i][prop];
                        row6 += '</td>'
                        break;
                    }

                case 6:
                    {
                        row7 += '<td>';
                        row7 += tasks[i][prop];
                        row7 += '</td>'
                        break;
                    }

                case 6:
                    {
                        row1 += '<td>';
                        row1 += tasks[i][prop];
                        row1 += '</td>'
                        break;
                    }

                default:
                    {
                        console.log('error');
                    }
            }
        }
    }
}
row1 += '</tr>';
console.log(row1);
// const tableContent = "<table><tr><th>Firstname</th><th>Lastname</th><th>Age</th></table>";
const tableContent = '';
const final = "<table>" + tableHead + row1 + row2 + row3 + row4 + row5 + row6 + row7 + "</table";
document.write(final);

