"use strict";

function tPassed(tNum) { // calculates time passed 
    const diffDays = Math.ceil(tNum / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(tNum / (1000 * 60 * 60));

    if (diffDays > 1) {
        const x = diffDays + " Days";
        return x;
    }
    const x = diffHours + " Hours";
    return x;
}

function fPercents(tGiven, tFinished) { // calculates finished tasks in percents of total.
    return Math.floor(((tFinished / tGiven) * 100));
}


const tasks = [
    {
        topic: "HTML",

        startTime: new Date("2021-01-10T09:00"),

        finishTime: new Date("2021-01-12T16:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7,
    },

    {
        topic: "CSS",

        startTime: new Date("2021-01-13T09:30"),

        finishTime: new Date("2021-01-16T19:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7
    },
    {
        topic: "Pages Projects",

        startTime: new Date("2021-01-16T20:00"),

        finishTime: new Date("2021-01-16T23:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7
    },
    {
        topic: "JS Basics",

        startTime: new Date("2021-01-17T09:30"),

        finishTime: new Date("2021-01-19T20:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7
    },
    {
        topic: "JS Logics",

        startTime: new Date("2021-01-20T10:00"),

        finishTime: new Date("2021-01-22T18:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7
    },
    {
        topic: "JS DOM",

        startTime: new Date("2021-01-22T09:30"),

        finishTime: new Date("2021-01-22T21:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 7
    }
];


for (let i = 0; i < tasks.length; i++) {
    const timeNumber = (tasks[i].finishTime.getTime() - tasks[i].startTime.getTime())
    tasks[i].tTotal = tPassed(timeNumber);
    tasks[i].finishedPercents = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) + "%";
    console.log(tasks[i].tTotal);
}

const tableHead = '<tr><th>Topic:</th><th>Start Time:</th><th>Finish Time:</th><th>Time Elapsed:</th>'
    + '<th>Tasks Given:</th><th>Tasks Finished:</th><th>Finished Percents:</th></tr>';

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
                        if (prop === "startTime" || prop === "finishTime") {
                            row1 += '<td>';
                            row1 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row1 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row1 += '<td>';
                            row1 += tasks[i][prop];
                            row1 += '</td>'
                        }
                        break;
                    }

                case 1:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row2 += '<td>';
                            row2 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row2 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row2 += '<td>';
                            row2 += tasks[i][prop];
                            row2 += '</td>'
                        }
                        break;
                    }

                case 2:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row3 += '<td>';
                            row3 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row3 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row3 += '<td>';
                            row3 += tasks[i][prop];
                            row3 += '</td>'
                        }
                        break;
                    }

                case 3:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row4 += '<td>';
                            row4 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row4 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row4 += '<td>';
                            row4 += tasks[i][prop];
                            row4 += '</td>'
                        }
                        break;
                    }

                case 4:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row5 += '<td>';
                            row5 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row5 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row5 += '<td>';
                            row5 += tasks[i][prop];
                            row5 += '</td>'
                        }
                        break;
                    }

                case 5:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row6 += '<td>';
                            row6 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row6 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row6 += '<td>';
                            row6 += tasks[i][prop];
                            row6 += '</td>'
                        }
                        break;
                    }

                case 6:
                    {
                        if (prop === "startTime" || prop === "finishTime") {
                            row7 += '<td>';
                            row7 += tasks[i][prop].getDate() + "/" + (tasks[i][prop].getMonth()+1) + "/" + tasks[i][prop].getFullYear() 
                            + " - " + tasks[i][prop].getHours() + ":" + tasks[i][prop].getMinutes() + "0";
                            row7 += '</td>'
                        } else if (prop !== "startTime" && prop !== "finishTime") {
                            row7 += '<td>';
                            row7 += tasks[i][prop];
                            row7 += '</td>'
                        }
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
// const tableContent = "<table><tr><th>Firstname</th><th>Lastname</th><th>Age</th></table>";
const tableContent = '';
const finalTable = "<table>" + tableHead + row1 + row2 + row3 + row4 + row5 + row6 + row7 + "</table";
document.write(finalTable);

// test();

