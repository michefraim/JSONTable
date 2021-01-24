"use strict";

function tPassed(tNum) { // calculates time passed between two dates
    const diffDays = Math.ceil(tNum / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(tNum / (1000 * 60 * 60));

    if (diffDays > 1) {
        const x = diffDays + " Days";
        return x;
    }
    const x = diffHours + " Hours";
    return x;
}

function fPercents(tGiven, tFinished) { // calculates finished tasks in percents
    return Math.floor(((tFinished / tGiven) * 100));
}

function niceDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at `
        + `${date.getHours()}:${date.getMinutes()}0`;
}

function miliTime(fTime, sTime) {
    return fTime - sTime;
}

function formTable() {
    const body = document.body;
    const table = document.createElement('table');
    body.append(table);
}

function tableHead() {
    const tr = document.createElement('tr');
    document.querySelector('table').append(tr);
    const titles = ["Topic:", "Start Time:", "Finish Time:", "Time Elapsed:", "Tasks Given", "Tasks Finished:", "% of finished:"];

    for (let i = 0; i < titles.length; i++) {
        const th = document.createElement('th');
        th.innerText = titles[i];
        tr.append(th);
    }
}

function tableContent(arr) {
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr');
        document.querySelector('table').append(tr);

        for (let prop in arr[i]) {
            if (Object.prototype.hasOwnProperty.call(arr[i], prop)) {
                const td = document.createElement('td');

                if (prop === "startTime" || prop === "finishTime") { //start time and finish time 
                    td.innerText = niceDate(arr[i][prop]);
                    tr.append(td);
                } else if (prop === "tTotal") {
                    const x = miliTime(arr[i].finishTime, arr[i].startTime);
                    if (x <= 18000000) {
                        td.innerText = arr[i][prop];
                        td.classList.add('lowestTime');
                        tr.append(td);
                    } else if (x <= 220000000) {
                        td.innerText = arr[i][prop];
                        td.classList.add('middleTime');
                        tr.append(td);
                    } else {
                        td.innerText = arr[i][prop];
                        td.classList.add('highestTime');
                        tr.append(td);
                    }

                } else if (prop === "finishedPercents") {
                    if ((fPercents(arr[i].tasksGiven, arr[i].tasksFinished) <= 50)) {
                        td.innerText = arr[i][prop];
                        td.classList.add('lowestPercents');
                        tr.append(td);
                    } else if ((fPercents(arr[i].tasksGiven, arr[i].tasksFinished) <= 75)) {
                        td.innerText = arr[i][prop];
                        td.classList.add('middlePercents');
                        tr.append(td);
                    } else {
                        td.innerText = arr[i][prop];
                        td.classList.add('highestPercents');
                        tr.append(td);
                    }
                }
                else {
                    td.innerText = arr[i][prop]; 
                    tr.append(td);
                }
            }
        }
    }
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


for (let i = 0; i < tasks.length; i++) { //adds the last two object prop
    const timeNumber = miliTime(tasks[i].finishTime, tasks[i].startTime); //difference between dates in milliseconds
    tasks[i].tTotal = tPassed(timeNumber);
    tasks[i].finishedPercents = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished) + "%";
}

formTable(); //forms new table in the body
tableHead(); //adds the table headers
tableContent(tasks); //adds the content of the table