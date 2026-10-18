"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

let remaining = totalTasks-completedTasks;
let day = 0;

console.log("Осталось:",remaining);

while(remaining>0){

    day++;

    const today=Math.min(remaining,dailyLimit);

    remaining-=today;

    console.log(`День ${day}: сделано ${today}, осталось ${remaining}`);

}

console.log("Всего понадобится дней:",day);