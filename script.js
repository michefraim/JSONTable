"use strict";

function tPassed(sTime, fTime) {
    const diffTime = Math.abs(fTime - sTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffDays > 1) {
        return diffDays + " Days";
    }
    return diffHours + " Hours"
}

function fPercents (tGiven, tFinished) {
    return ((tFinished / tGiven) * 100);
}


const tasks = [
    {
        startTime: new Date("2021-01-17:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "JavaScript"
    },

    {
        startTime: new Date("2021-01-20:13:00"),

        finishTime: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: "JavaScript"
    }
];

for (let i = 0; i < tasks.length; i++) {
        tasks[i].timePassed = tPassed(tasks[i].startTime, tasks[i].finishTime);
        tasks[i].finishedPercents  = fPercents(tasks[i].tasksGiven, tasks[i].tasksFinished);
} 

// console.log(x);
console.log(tasks)
