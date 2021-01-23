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

        startTime: new Date("2021-01-08T09:00"),

        finishTime: new Date("2021-01-12T16:00"),

        tTotal: "",

        tasksGiven: 10,

        tasksFinished: 10
    },

    {
        topic: "CSS",

        startTime: new Date("2021-01-13T09:30"),

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

        startTime: new Date("2021-01-17T09:30"),

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

        startTime: new Date("2021-01-22T09:30"),

        finishTime: new Date("2021-01-22T21:00"),

        tTotal: "",

        tasksGiven: 8,

        tasksFinished: 5
    }
];


for (let i = 0; i < tasks.length; i++) {
    const timeNumber = (tasks[i].finishTime.getTime() - tasks[i].startTime.getTime())
    tasks[i].tTotal = tPassed(timeNumber);
    tasks[i].finishedPercents = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) + "%";
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
    for (let prop in tasks[i]) {
        if (Object.prototype.hasOwnProperty.call(tasks[i], prop)) {
            switch (i) {
                case 0:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row1 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row1 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row1 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row1 += `<td class="highestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row1 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row1 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row1 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row1 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }

                case 1:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row2 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row2 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row2 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row2 += `<td class="highestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row2 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row2 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row2 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row2 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }

                case 2:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row3 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row3 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row3 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row3 += `<td class="HighestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row3 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row3 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row3 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row3 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }

                case 3:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row4 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row4 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row4 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row4 += `<td class="HighestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row4 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row4 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row4 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row4 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }
                case 4:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row5 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row5 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row5 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row5 += `<td class="HighestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row5 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row5 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row5 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row5 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }

                case 5:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row6 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row6 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row6 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row6 += `<td class="HighestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 50)) {
                                row6 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row6 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row6 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row6 += `<td> ${tasks[i][prop]} </td>`;
                        }
                        break;
                    }

                case 6:
                    {
                        if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                            row7 += `<td> ${tasks[i][prop].getDate()}/${tasks[i][prop].getMonth() + 1}/${tasks[i][prop].getFullYear()} - `
                                + `${tasks[i][prop].getHours()}:${tasks[i][prop].getMinutes()}0</td>`;
                        } else if (prop === "tTotal") {
                            if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 18000000) {
                                row7 += `<td class="lowestTime">  ${tasks[i][prop]}</td>`;

                            } else if ((tasks[i].finishTime.getTime() - tasks[i].startTime.getTime()) <= 220000000) {
                                row7 += `<td class="middleTime">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row7 += `<td class="HighestTime">  ${tasks[i][prop]}</td>`;
                            }
                        } else if (prop === "finishedPercents") {
                            console.log(fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished));
                            if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 49)) {
                                row7 += `<td class="lowestPercents">  ${tasks[i][prop]}</td>`;

                            } else if ((fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) <= 75)) {
                                row7 += `<td class="middlePercents">  ${tasks[i][prop]}</td>`;
                            }
                            else {
                                row7 += `<td class="highestPercents">  ${tasks[i][prop]}</td>`;
                            }
                        }

                        else if (prop !== "startTime" && prop !== "finishTime" && prop !== "tTotal" && prop !== "finishedPercents") {
                            row7 += `<td> ${tasks[i][prop]} </td>`;
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

const tableContent = '';
const finalTable = "<table>" + tableHead + row1 + row2 + row3 + row4 + row5 + row6 + row7 + "</table>";
document.write(finalTable);

