'use strict';

const init = () => {
    let statLabels = [
        document.querySelector("#strLabel"),
        document.querySelector("#dexLabel"),
        document.querySelector("#conLabel"),
        document.querySelector("#intLabel"),
        document.querySelector("#wisLabel"),
        document.querySelector("#chaLabel")
    ];

    statLabels.forEach(statLabel => {
        statLabel.addEventListener("click", (foo) => {
            let statValue = parseInt(foo.target.parentNode.lastElementChild.innerHTML);
            let statLabel = foo.target.innerHTML;

            const d20StatCheckResult = d20StatCheck(statValue);

            if (d20StatCheckResult.success) {
                alert(`${d20StatCheckResult.dieRollResult} < ${statLabel} ${d20StatCheckResult.statValue}, Success!`);
            } else {
                alert(`${d20StatCheckResult.dieRollResult} >= ${statLabel} ${d20StatCheckResult.statValue}: Failure`);
            }
        })
    })

    window.d20StatCheck = d20StatCheck;
    window.dieRoll = dieRoll;
}

// will accept a label to select the element of the necessary stat
// will randomly select 1-20 values in memory
// will return a boolean for success/failure
// success dieRoll < statValue
// failure dieRoll >= statValue
const d20StatCheck = (statValue) => {
    let success = false;
    let dieRollResult = dieRoll(20);

    if (dieRollResult < statValue) success = true;
    
    return { success, statValue, dieRollResult };
}

const dieRoll = (numberOfSides) => {
    // where number of sides is undefined, throw an 
    // error or prevent remaining logic
    // check if numberOfSides is one of [4, 6, 8, 10, 12, 20]

    const dieRoll = Math.floor(Math.random() * numberOfSides) + 1;
    return dieRoll;
}

// set fieldtodesiredvalue

window.onload = init;