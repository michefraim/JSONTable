"use strict";

function tPassed(tNum) { // calculates time passed between two dates (time comes as milliseconds)
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

function niceDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - `
        + `${date.getHours()}:${date.getMinutes()}0`;
}

function miliTime(fTime, sTime) {
    return fTime - sTime;
}

const tasks = [
    {
        topic: "HTML",

        startTime: new Date("2021-01-08T09:00"),

        finishTime: new Date("2021-01-12T16:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 10
    },

    {
        topic: "CSS",

        startTime: new Date("2021-01-13T09:00"),

        finishTime: new Date("2021-01-16T19:00"),

        tTotal: "",

        tasksGiven: 30,

        tasksFinished: 12
    },
    {
        topic: "Pages Projects",

        startTime: new Date("2021-01-16T20:00"),

        finishTime: new Date("2021-01-16T23:00"),

        tTotal: "",

        tasksGiven: 15,

        tasksFinished: 2
    },
    {
        topic: "JS Basics",

        startTime: new Date("2021-01-17T09:00"),

        finishTime: new Date("2021-01-19T20:00"),

        tTotal: "",

        tasksGiven: 22,

        tasksFinished: 19
    },
    {
        topic: "JS Logics",

        startTime: new Date("2021-01-20T10:00"),

        finishTime: new Date("2021-01-22T18:00"),

        tTotal: "",

        tasksGiven: 25,

        tasksFinished: 18
    },
    {
        topic: "JS DOM",

        startTime: new Date("2021-01-22T09:00"),

        finishTime: new Date("2021-01-22T21:00"),

        tTotal: "",

        tasksGiven: 8,

        tasksFinished: 5
    }
];


for (let i = 0; i < tasks.length; i++) {
    const timeNumber = miliTime(tasks[i].finishTime, tasks[i].startTime); //difference between dates in milliseconds
    tasks[i].tTotal = tPassed(timeNumber);
    tasks[i].finishedPercents = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) + "%";
}

const tableHead = '<tr><th>Topic:</th><th>Start Time:</th><th>Finish Time:</th><th>Time Elapsed:</th>'
    + '<th>Tasks Given:</th><th>Tasks Finished:</th><th>Finished Percents:</th></tr>';

const rowsArray = ["", "", "", "", "", "", ""];

for (let i = 0; i < rowsArray.length; i++) {
    rowsArray[i] += "<tr>";
    for (let prop in tasks[i]) {
        if (Object.prototype.hasOwnProperty.call(tasks[i], prop)) {
            if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                rowsArray[i] += `<td> ${niceDate(tasks[i][prop])} </td> `;
            } else if (prop === "tTotal") {
                const x = miliTime(tasks[i].finishTime, tasks[i].startTime);
                if (x <= 18000000) {
                    rowsArray[i] += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                } else if (x <= 220000000) {
                    rowsArray[i] += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                } else {
                    rowsArray[i] += `<td class="highestTime">  ${tasks[i][prop]}</td>`;
                }
            } else if (prop === "finishedPercents") {
                if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                    rowsArray[i] += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                    rowsArray[i] += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                }
                else {
                    rowsArray[i] += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                }
            }
            else {
                rowsArray[i] += `<td> ${tasks[i][prop]} </td>`;
            }
        }
    }
    rowsArray[i] += "</tr>";
}

let finalTable = `<table>${tableHead}`;
for (let i = 0; i < rowsArray.length; i++) {
    finalTable += rowsArray[i];
}
finalTable += "</table>";
document.write(finalTable);