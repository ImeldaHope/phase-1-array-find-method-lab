// code your solution here

function superbowlWin(arr){
    const win = arr.find(arr => arr.result === "W");

    if(win) {        
        return win.year;
    } 
}

superbowlWin()